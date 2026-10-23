const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'ok', service: 'GoAdsLive Lead API' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }
    const data = body || {};

    // 1. Honeypot check for spam / bot protection
    if (data._hp && String(data._hp).trim() !== '') {
      return res.status(200).json({
        success: true,
        message: 'Your details have been submitted successfully. Our team will contact you to discuss your UGC video requirements.'
      });
    }

    // 2. Normalize fields
    const fullName = (data.fullName || data.name || '').trim();
    const brandName = (data.brandName || data.brand || '').trim();
    const workEmail = (data.workEmail || data.email || '').trim();
    const phone = (data.phone || data.phoneNumber || '').trim();
    const businessType = (data.businessType || data.type || '').trim();
    const videoCount = (data.videoCount || data.videos || '').trim();

    const sanitize = (val) => String(val || '').replace(/[<>]/g, '').trim();

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      submissionTimestamp: new Date().toISOString(),
      fullName: sanitize(fullName) || 'Website Visitor',
      brandName: sanitize(brandName) || 'Not Provided',
      workEmail: sanitize(workEmail) || 'Not Provided',
      phone: sanitize(phone) || 'Not Provided',
      businessType: sanitize(businessType) || 'D2C / E-commerce',
      videoCount: sanitize(videoCount) || '5 videos',
      userAgent: req.headers['user-agent'] || 'unknown',
      ip: req.headers['x-forwarded-for'] || (req.socket && req.socket.remoteAddress) || 'unknown'
    };

    // Safe Local Storage: write to contacts.json if writable, or fall back to /tmp/contacts.json on read-only serverless platforms (Vercel)
    try {
      const contactsFile = path.join(process.cwd(), 'contacts.json');
      let contacts = [];
      if (fs.existsSync(contactsFile)) {
        try {
          contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8') || '[]');
        } catch {
          contacts = [];
        }
      }
      contacts.unshift(submission);
      fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (fileErr) {
      try {
        const os = require('os');
        const tmpFile = path.join(os.tmpdir(), 'contacts.json');
        let tmpContacts = [];
        if (fs.existsSync(tmpFile)) {
          try { tmpContacts = JSON.parse(fs.readFileSync(tmpFile, 'utf8') || '[]'); } catch {}
        }
        tmpContacts.unshift(submission);
        fs.writeFileSync(tmpFile, JSON.stringify(tmpContacts, null, 2), 'utf8');
      } catch (tmpErr) {}
    }

    // Forward to Google Sheet Webhook
    let webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || '';
    if (!webhookUrl) {
      try {
        const configFile = path.join(process.cwd(), 'google-sheet-config.json');
        if (fs.existsSync(configFile)) {
          const cfg = JSON.parse(fs.readFileSync(configFile, 'utf8') || '{}');
          if (cfg.webhookUrl) webhookUrl = cfg.webhookUrl.trim();
        }
      } catch (e) {}
    }

    if (webhookUrl && webhookUrl.startsWith('http')) {
      const sheetPayload = {
        ...submission,
        phone: (submission.phone && submission.phone.startsWith('+')) ? ("'" + submission.phone) : submission.phone
      };

      try {
        await fetch(webhookUrl, {
          method: 'POST',
          redirect: 'follow',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(sheetPayload)
        });
      } catch (sheetErr) {
        console.error('Google Sheet forwarding error:', sheetErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your details have been submitted successfully. Our team will contact you to discuss your UGC video requirements.'
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

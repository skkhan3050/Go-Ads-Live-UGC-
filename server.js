const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || parseInt(process.argv[2], 10) || 3000;
const BASE_DIR = __dirname;
const PRIMARY_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.m3u8': 'application/vnd.apple.mpegurl',
  '.ts': 'video/mp2t',
  '.txt': 'text/plain; charset=utf-8',
};

function resolveFilePath(reqPath) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(reqPath.split('?')[0]);
  } catch {
    return null;
  }

  // Intercept Next.js image optimization requests e.g. /_next/image?url=... or /next-assets/image?url=...
  if (reqPath.startsWith('/_next/image') || reqPath.startsWith('/next-assets/image')) {
    try {
      const parsedUrl = new URL(reqPath, 'http://localhost:3000');
      const realUrl = parsedUrl.searchParams.get('url');
      if (realUrl) {
        const nested = resolveFilePath(realUrl);
        if (nested) return nested;
      }
    } catch {}
  }

  // Prevent directory traversal
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');

  // 1. Try in root workspace dir
  const candidate = path.join(BASE_DIR, safePath);
  if (fs.existsSync(candidate)) {
    const stat = fs.statSync(candidate);
    if (stat.isDirectory()) {
      const indexFile = path.join(candidate, 'index.html');
      if (fs.existsSync(indexFile)) return indexFile;
    } else {
      return candidate;
    }
  }

  // 2. Fallback in PRIMARY_DIR: www.yuvichaarfunnels.com
  const candidatePrimary = path.join(PRIMARY_DIR, safePath);
  if (fs.existsSync(candidatePrimary)) {
    const stat = fs.statSync(candidatePrimary);
    if (!stat.isDirectory()) {
      return candidatePrimary;
    }
  } else if (safePath.includes('vz-5ad9b308-4a4.b-cdn.net')) {
    // Fallback for HLS streams where only 360p/240p exists
    if (safePath.endsWith('.m3u8')) {
      const dir = path.dirname(candidateRoot);
      const parent = path.dirname(dir);
      const fallback360 = path.join(parent, '360p', 'video.m3u8');
      if (fs.existsSync(fallback360)) return fallback360;
      const fallback240 = path.join(parent, '240p', 'video.m3u8');
      if (fs.existsSync(fallback240)) return fallback240;
    } else if (safePath.endsWith('.ts')) {
      const filename = path.basename(candidateRoot);
      const dir = path.dirname(candidateRoot);
      const parent = path.dirname(dir);
      const in360 = path.join(parent, '360p', filename);
      if (fs.existsSync(in360)) return in360;
      const in240 = path.join(parent, '240p', filename);
      if (fs.existsSync(in240)) return in240;
      const any360 = path.join(parent, '360p', 'video1.ts');
      if (fs.existsSync(any360)) return any360;
      const any240 = path.join(parent, '240p', 'video0.ts');
      if (fs.existsSync(any240)) return any240;
    }
  }

  // 3. Fallback for clean URLs (e.g. /thank-you -> thank-you.html) or SPA routing
  if (!path.extname(safePath)) {
    const htmlCandidate = path.join(PRIMARY_DIR, safePath + '.html');
    if (fs.existsSync(htmlCandidate)) return htmlCandidate;
    const fallback = path.join(PRIMARY_DIR, 'index.html');
    if (fs.existsSync(fallback)) return fallback;
  }

  return null;
}

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url.startsWith('/save-thumb')) {
    const parsedUrl = new URL(req.url, 'http://localhost:3000');
    const filename = parsedUrl.searchParams.get('name') || '5-1-thumbnail.jpg';
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(path.join(PRIMARY_DIR, 'videos', filename), buffer);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('saved');
    });
    return;
  }

  if (req.method === 'POST' && (req.url.startsWith('/api/contact') || req.url.startsWith('/api/ugc-lead'))) {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      try {
        const bodyStr = Buffer.concat(chunks).toString('utf8');
        const data = JSON.parse(bodyStr || '{}');

        // 1. Honeypot check for spam / bot protection
        if (data._hp && String(data._hp).trim() !== '') {
          // Fake success response to bot without storing spam
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            message: 'Your details have been submitted successfully. Our team will contact you to discuss your UGC video requirements.'
          }));
          return;
        }

        // 2. Normalize fields
        const fullName = (data.fullName || data.name || '').trim();
        const brandName = (data.brandName || data.brand || '').trim();
        const workEmail = (data.workEmail || data.email || '').trim();
        const phone = (data.phone || data.phoneNumber || '').trim();
        const businessType = (data.businessType || data.type || '').trim();
        const videoCount = (data.videoCount || data.videos || '').trim();

        // 3. Normalize values with graceful defaults (no blocking errors if not filled)
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
          ip: req.socket.remoteAddress || 'unknown'
        };

        const contactsFile = path.join(BASE_DIR, 'contacts.json');
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

        // Mirror backup
        const mirrorContacts = path.join('c:', 'Users', 'TARIF SK', 'Downloads', 'www.yuvichaarfunnels.com', 'contacts.json');
        try {
          fs.writeFileSync(mirrorContacts, JSON.stringify(contacts, null, 2), 'utf8');
        } catch (e) {}

        console.log(`[UGC Lead Received] ${submission.fullName} (${submission.brandName}) | ${submission.workEmail} | ${submission.businessType} | ${submission.videoCount}`);

        // Google Sheet Webhook Sync (Target: https://docs.google.com/spreadsheets/d/1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg/edit)
        try {
          const configFile = path.join(BASE_DIR, 'google-sheet-config.json');
          let webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || '';
          if (fs.existsSync(configFile)) {
            try {
              const cfg = JSON.parse(fs.readFileSync(configFile, 'utf8') || '{}');
              if (cfg.webhookUrl && cfg.webhookUrl.trim() !== '') {
                webhookUrl = cfg.webhookUrl.trim();
              }
            } catch (e) {}
          }

          if (webhookUrl && webhookUrl.startsWith('http')) {
            console.log(`[Google Sheet Sync] Forwarding lead to Google Apps Script webhook: ${webhookUrl}`);
            
            // Format phone safely with single quote prefix if starting with '+' to avoid Google Sheets formula interpretation
            const sheetPayload = {
              ...submission,
              phone: (submission.phone && submission.phone.startsWith('+')) ? ("'" + submission.phone) : submission.phone
            };

            fetch(webhookUrl, {
              method: 'POST',
              redirect: 'follow',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify(sheetPayload)
            }).then(async (sheetRes) => {
              const sheetText = await sheetRes.text();
              console.log(`[Google Sheet Response] Status: ${sheetRes.status} | Body: ${sheetText}`);
            }).catch((sheetErr) => {
              console.error(`[Google Sheet Forwarding Error] ${sheetErr.message}`);
            });
          } else {
            console.log(`[Google Sheet] Webhook URL is pending setup in google-sheet-config.json`);
          }
        } catch (sheetForwardErr) {
          console.error(`[Google Sheet Forwarding Exception] ${sheetForwardErr.message}`);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Your details have been submitted successfully. Our team will contact you to discuss your UGC video requirements.'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Google Sheet Webhook config endpoint
  if (req.url.startsWith('/api/google-sheet-config')) {
    const configFile = path.join(BASE_DIR, 'google-sheet-config.json');
    if (req.method === 'GET') {
      let cfg = { spreadsheetId: '1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg', webhookUrl: '' };
      if (fs.existsSync(configFile)) {
        try { cfg = JSON.parse(fs.readFileSync(configFile, 'utf8')); } catch (e) {}
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(cfg));
      return;
    }
    if (req.method === 'POST') {
      const chunks = [];
      req.on('data', chunk => chunks.push(chunk));
      req.on('end', () => {
        try {
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
          let cfg = { spreadsheetId: '1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg', webhookUrl: '' };
          if (fs.existsSync(configFile)) {
            try { cfg = JSON.parse(fs.readFileSync(configFile, 'utf8')); } catch (e) {}
          }
          if (body.webhookUrl !== undefined) {
            cfg.webhookUrl = String(body.webhookUrl).trim();
          }
          fs.writeFileSync(configFile, JSON.stringify(cfg, null, 2), 'utf8');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, config: cfg }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: e.message }));
        }
      });
      return;
    }
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
    return;
  }

  const filePath = resolveFilePath(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
    return;
  }

  try {
    const stat = fs.statSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Handle HTTP Range requests for video/audio streaming
    const range = req.headers.range;
    if (range && stat.size > 0) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;

      if (start >= stat.size || end >= stat.size) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stat.size}`,
        });
        res.end();
        return;
      }

      const chunksize = end - start + 1;
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache',
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Internal Server Error: ${err.message}`);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`==============================================`);
  console.log(`🚀 Local Server running!`);
  console.log(`👉 Local:   http://localhost:${PORT}`);
  console.log(`👉 Network: http://127.0.0.1:${PORT}`);
  console.log(`Serving from: ${PRIMARY_DIR}`);
  console.log(`==============================================`);
});

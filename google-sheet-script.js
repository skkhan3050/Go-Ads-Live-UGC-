/**
 * =========================================================================
 * GOOGLE APPS SCRIPT FOR YUVICHAAR FUNNELS LEAD CAPTURE
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg/edit
 * =========================================================================
 * 
 * 📋 1-MINUTE SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg/edit
 * 2. In the top menu, click: "Extensions" (एक्सटेंशन) -> "Apps Script"
 * 3. Delete any default code in the editor, and PASTE THIS ENTIRE FILE.
 * 4. Click the blue "Deploy" (तैनात करें) button on the top right -> choose "New deployment".
 * 5. Click the Gear icon (⚙️) next to "Select type" -> choose "Web app".
 * 6. Set Description: "Yuvichaar UGC Lead Webhook"
 * 7. Set "Execute as": "Me" (मेरा खाता)
 * 8. Set "Who has access": "Anyone" (कोई भी)   <--- ⚠️ VERY IMPORTANT!
 * 9. Click "Deploy" button.
 * 10. Click "Authorize access" -> select your Google account -> click "Advanced" (उन्नत) -> click "Go to Untitled project (unsafe)" -> click "Allow" (अनुमति दें).
 * 11. Copy the "Web app URL" (looks like https://script.google.com/macros/s/.../exec) and paste it back to the assistant!
 * =========================================================================
 */

var SPREADSHEET_ID = "1yCrLBPz5VAi9FrLb8I9QZFFDAgvtkvmb-F9mkyxHhZg";

function getTargetSheet() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) return ss.getActiveSheet();
  } catch (e) {}
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  } catch (err) {
    throw new Error("Could not open spreadsheet: " + err.message);
  }
}

function initialSetup() {
  var sheet = getTargetSheet();
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Submission Date & Time",
      "Full Name",
      "Business / Brand Name",
      "Work Email",
      "Phone / WhatsApp Number",
      "Business Type",
      "UGC Videos Needed",
      "IP Address / Source"
    ];
    sheet.appendRow(headers);
    
    // Style headers
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange
      .setFontWeight("bold")
      .setFontFamily("Arial")
      .setFontSize(11)
      .setBackground("#2563eb")
      .setFontColor("#ffffff")
      .setHorizontalAlignment("center")
      .setVerticalAlignment("middle");
    
    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1);
    
    // Set column widths
    sheet.setColumnWidth(1, 190); // Date & Time
    sheet.setColumnWidth(2, 180); // Full Name
    sheet.setColumnWidth(3, 190); // Brand Name
    sheet.setColumnWidth(4, 220); // Email
    sheet.setColumnWidth(5, 180); // Phone
    sheet.setColumnWidth(6, 170); // Business Type
    sheet.setColumnWidth(7, 160); // Video Count
    sheet.setColumnWidth(8, 140); // Source/IP
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 15 seconds for concurrent locks to release
  lock.tryLock(15000);

  try {
    var sheet = getTargetSheet();
    
    // Auto-create headers if sheet is brand new/empty
    if (sheet.getLastRow() === 0) {
      initialSetup();
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Format IST date
    var now = new Date();
    var formattedDate = Utilities.formatDate(now, "Asia/Kolkata", "dd MMM yyyy, hh:mm a");

    var row = [
      formattedDate,
      data.fullName || data.name || "Website Lead",
      data.brandName || data.brand || "Not Provided",
      data.workEmail || data.email || "Not Provided",
      data.phone || data.phoneNumber || "Not Provided",
      data.businessType || data.type || "D2C / E-commerce",
      data.videoCount || data.videos || "5 videos",
      data.ip || data.userAgent || "Website Form"
    ];

    sheet.appendRow(row);

    // Style the newly added data row
    var newRowNum = sheet.getLastRow();
    var rowRange = sheet.getRange(newRowNum, 1, 1, 8);
    rowRange
      .setFontFamily("Arial")
      .setFontSize(10)
      .setVerticalAlignment("middle");
    
    sheet.setRowHeight(newRowNum, 30);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Lead saved to Google Sheet successfully",
        row: newRowNum
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Yuvichaar Funnels Google Sheet Webhook is active and listening for leads!",
      targetSheetId: SPREADSHEET_ID
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional test function that you can click "Run" in Apps Script editor to verify setup
function testInsertRow() {
  initialSetup();
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test Lead (Yuvichaar)",
        brandName: "My D2C Brand",
        workEmail: "founder@mybrand.com",
        phone: "+91 9876543210",
        businessType: "D2C / E-commerce",
        videoCount: "5 videos",
        ip: "Test Run"
      })
    }
  };
  var res = doPost(fakeEvent);
  Logger.log(res.getContent());
}

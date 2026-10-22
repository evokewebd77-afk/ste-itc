/**
 * STE Website — Google Apps Script Form Receiver
 * Run this script from the account: damnart.seo@gmail.com
 *
 * Setup:
 * 1. Go to https://script.google.com  ->  New project
 * 2. Paste this file as Code.gs
 * 3. Deploy > New deployment > Type: Web app
 *      - Execute as: Me (damnart.seo@gmail.com)
 *      - Who has access: Anyone
 * 4. Copy the Web app URL and paste it into:
 *      src/lib/appsScript.ts  ->  APPS_SCRIPT_URL
 */

const SHEET_NAME = 'Website Form Submissions';
const NOTIFY_EMAIL = 'damnart.seo@gmail.com';
const SUBJECT_PREFIX = '[STE Website]';

const HEADERS = [
  'Timestamp',
  'Form Type',
  'Name',
  'Email',
  'Phone',
  'Category',
  'Product',
  'Quantity',
  'Message',
  'Page URL',
];

function doPost(e) {
  let lock = null;
  try {
    lock = LockService.getScriptLock();
    lock.waitLock(30000);

    const p = parseParams_(e);
    const formType = p.formType || 'Contact Form';

    getSheet_().appendRow([
      new Date(),
      formType,
      p.name || '',
      p.email || '',
      p.phone || '',
      p.category || '',
      p.product || '',
      p.quantity || '',
      p.message || '',
      p.page || '',
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: SUBJECT_PREFIX + ' New ' + formType + ' from ' + (p.name || 'Visitor'),
      htmlBody: buildEmailHtml_(formType, p),
    });

    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  } finally {
    if (lock) {
      try {
        lock.releaseLock();
      } catch (ignored) {}
    }
  }
}

function doGet() {
  return json_({ result: 'ok', account: NOTIFY_EMAIL });
}

function parseParams_(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    try {
      const parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (ignored) {}
  }
  return e.parameter || {};
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#dbeafe');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function buildEmailHtml_(formType, p) {
  const rows = [
    ['Form Type', formType],
    ['Name', p.name],
    ['Email', p.email],
    ['Phone', p.phone],
    ['Category', p.category],
    ['Product', p.product],
    ['Quantity', p.quantity],
    ['Message', p.message],
    ['Page URL', p.page],
  ]
    .filter((r) => r[1])
    .map(
      (r) =>
        '<tr><td style="padding:6px 12px;background:#f1f5f9;font-weight:bold;border:1px solid #e2e8f0;">' +
        r[0] +
        '</td><td style="padding:6px 12px;border:1px solid #e2e8f0;">' +
        String(r[1]).replace(/</g, '&lt;') +
        '</td></tr>'
    )
    .join('');

  return (
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;">' +
    '<h2 style="margin:0 0 12px;">New enquiry received from the STE website</h2>' +
    '<table style="border-collapse:collapse;">' +
    rows +
    '</table></div>'
  );
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

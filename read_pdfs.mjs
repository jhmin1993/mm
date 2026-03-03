import { getDocument } from './node_modules/pdfjs-dist/legacy/build/pdf.mjs';

async function extractText(filePath) {
  const url = 'file:///' + filePath.split('[').join('%5B').split(']').join('%5D').split('+').join('%2B');
  const doc = await getDocument({ url }).promise;
  let text = '';
  const maxPages = Math.min(doc.numPages, 25);
  for (let i = 1; i <= maxPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    text += '\n=== Page ' + i + ' ===\n' + pageText;
  }
  return text;
}

const files = [
  'D:/mjh/0304/TM[MD]SAP-MasterData-Overview-v350_20260205O.pdf',
  'D:/mjh/0506/TM[M1]SAP-MaterialsManagement-Overview-P01-v240_20260212O.pdf',
  'D:/mjh/0708/TM[MM]SAP-MaterialsManagement-Overview-P01+P02-v244_20260226.pdf',
];

for (const f of files) {
  console.log('\n========== ' + f + ' ==========');
  try { console.log(await extractText(f)); }
  catch(e) { console.log('ERROR:', e.message); }
}

const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const target = '1e';
// look for "$1e" or "$L1e" or ":1e" or "@1e"
const matches = content.match(/["$[\]:,]1e["$[\]:,]/g);
console.log('Matches for 1e:', matches);

let idx = 0;
while ((idx = content.indexOf('1e', idx)) !== -1) {
  const snippet = content.slice(Math.max(0, idx - 40), idx + 40);
  if (snippet.includes('$') || snippet.includes('children') || snippet.includes('L')) {
    console.log('Pos', idx, snippet);
  }
  idx += 2;
}

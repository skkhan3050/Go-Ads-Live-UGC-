const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const startIdx = content.indexOf('id="us-vs-agencies"');
const endIdx = content.indexOf('</section>', startIdx);
console.log('us-vs-agencies from', startIdx, 'to', endIdx);
console.log('End snippet:\n', content.slice(endIdx - 400, endIdx + 100));

const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const target = 'dvxqb1wge';
let pos = 0;
while ((pos = content.indexOf(target, pos)) !== -1) {
  console.log('Found', target, 'at index', pos);
  console.log('Surrounding 200 chars:\n', content.slice(Math.max(0, pos - 100), pos + 200));
  pos += target.length;
}

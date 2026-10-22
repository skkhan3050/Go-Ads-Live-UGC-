const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const targets = ['durga', '53px', '55px', 'heena', 'ritesh'];
for (const t of targets) {
  let count = 0;
  let idx = 0;
  const indices = [];
  while ((idx = content.indexOf(t, idx)) !== -1) {
    indices.push(idx);
    idx += t.length;
    count++;
  }
  console.log(`${t}: found ${count} times at indices:`, indices);
}

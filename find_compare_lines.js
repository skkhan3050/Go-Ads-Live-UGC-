const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="us-vs-agencies"')) {
    console.log('id="us-vs-agencies" at line', i + 1);
  }
  if (lines[i].includes('id="behind-the-scenes"')) {
    console.log('id="behind-the-scenes" at line', i + 1);
    for (let j = Math.max(0, i - 15); j <= i + 5; j++) {
      console.log(`${j + 1}: ${lines[j]}`);
    }
  }
}

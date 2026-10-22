const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

// Search for 'heena_ziii' and look at lines before line 3101
const lines = content.split('\n');
console.log('Total lines:', lines.length);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('17:[') || lines[i].includes('heena_ziii')) {
    console.log('Line', i + 1);
    for (let j = Math.max(0, i - 30); j <= Math.min(lines.length - 1, i + 10); j++) {
      console.log(`${j + 1}: ${lines[j].slice(0, 150)}`);
    }
    break;
  }
}

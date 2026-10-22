const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

// Search for where Creators (Male) or Creators is defined
const idx = content.indexOf('Creators (Male)');
if (idx !== -1) {
  console.log(content.slice(idx - 4000, idx + 1000));
} else {
  console.log('Not found');
}

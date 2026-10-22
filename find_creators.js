const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

const regex = /https:\/\/www\.instagram\.com\/[^"\\&]+/g;
let match;
const found = new Set();
while ((match = regex.exec(content))) {
  found.add(match[0]);
}

console.log('Instagram URLs found in index.html:');
for (const url of found) {
  console.log(url);
}

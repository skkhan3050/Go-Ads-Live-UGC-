const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

console.log(content.slice(84000, 87500));

const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

console.log('--- Context around 77000 ---');
console.log(content.slice(76000, 85000));

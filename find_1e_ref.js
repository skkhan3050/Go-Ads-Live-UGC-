const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

// Let's search for "1e" in quotes or brackets
const re = /["'\[,]1e["'\]:,]/g;
let m;
while ((m = re.exec(content))) {
  console.log(m[0], 'at', m.index, content.slice(Math.max(0, m.index - 50), m.index + 50));
}

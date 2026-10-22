const fs = require('fs');
const dir = 'www.yuvichaarfunnels.com/_next/static/chunks';
const files = fs.readdirSync(dir);

for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync(dir + '/' + f, 'utf8');
  const ig = content.match(/instagram\.com\/[a-zA-Z0-9_.]+/g) || [];
  if (ig.length > 0) {
    console.log(`In ${f}, found Instagram accounts:`, ig);
  }
}

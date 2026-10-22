const fs = require('fs');
const glob = ['www.yuvichaarfunnels.com/index.html', ...fs.readdirSync('www.yuvichaarfunnels.com/_next/static/chunks').map(f => 'www.yuvichaarfunnels.com/_next/static/chunks/' + f)];

for (const file of glob) {
  if (!file.endsWith('.js') && !file.endsWith('.html')) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('Creators (female)') || content.includes('Creators (Female)') || content.includes('Creators') || content.includes('heena_ziii')) {
    console.log('Found in', file);
    let idx = 0;
    while ((idx = content.indexOf('Creators', idx)) !== -1) {
      console.log('  At', idx, content.slice(Math.max(0, idx - 50), idx + 100));
      idx += 8;
    }
  }
}

const fs = require('fs');
const content = fs.readFileSync('www.yuvichaarfunnels.com/index.html', 'utf8');

// Search for '["$","a","0"' or 'Creators' in all pushes
const pushes = content.match(/self\.__next_f\.push\(\[\s*1,\s*'([^']+)'\s*\]\)/g) || [];
console.log('Total pushes:', pushes.length);

pushes.forEach((p, i) => {
  if (p.includes('Creators') || p.includes('instagram.com') || p.includes('grid-cols')) {
    console.log(`Push ${i}:`, p.slice(0, 300));
  }
});

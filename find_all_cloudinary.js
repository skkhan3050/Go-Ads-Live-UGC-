const fs = require('fs');

function searchFolder(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = dir + '/' + f;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!f.includes('node_modules') && !f.includes('.git')) {
        searchFolder(full);
      }
    } else if (f.endsWith('.js') || f.endsWith('.html')) {
      const txt = fs.readFileSync(full, 'utf8');
      const cloudinary = txt.match(/https:\/\/res\.cloudinary\.com\/[^\s"')]+/g) || [];
      if (cloudinary.length > 0) {
        console.log(`Found ${cloudinary.length} in ${full}`);
        for (const c of cloudinary) {
          if (c.includes('17743651') || c.includes('upload/v17')) {
            console.log(' ', c);
          }
        }
      }
    }
  }
}

searchFolder('www.yuvichaarfunnels.com');

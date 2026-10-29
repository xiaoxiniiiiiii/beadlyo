import sharp from 'sharp';
await sharp(process.argv[2]).webp({quality:90}).toFile('public/images/hero.webp');

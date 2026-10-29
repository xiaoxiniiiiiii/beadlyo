import sharp from 'sharp';
import fs from 'node:fs';
const input=process.argv[2]; const meta=await sharp(input).metadata();
for(let row=0;row<8;row++)for(let col=0;col<8;col++){const left=Math.round(col*meta.width/8),top=Math.round(row*meta.height/8),right=Math.round((col+1)*meta.width/8),bottom=Math.round((row+1)*meta.height/8);await sharp(input).extract({left:left+2,top:top+2,width:right-left-4,height:bottom-top-4}).resize(640,640).webp({quality:88}).toFile(`public/images/product-${row*8+col+1}.webp`)}
fs.writeFileSync('public/images/asset-manifest.json',JSON.stringify({source:'AI generated unbranded jewelry contact sheet',layout:'8 columns × 8 rows; row-major extraction',format:'WebP',products:64},null,2));
console.log('64 WebP assets extracted');


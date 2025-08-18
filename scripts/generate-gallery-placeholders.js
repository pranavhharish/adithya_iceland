// Generate placeholder images for photography gallery
const fs = require('fs');
const path = require('path');

function createSVGPlaceholder(width, height, gradient, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradient[0]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradient[1]};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <text x="50%" y="50%" font-family="Arial" font-size="18" fill="white" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

const gallery = [
  { name: 'aurora-1.svg', gradient: ['#2D5016', '#228B22'], text: 'Aurora over Kirkjufell' },
  { name: 'aurora-2.svg', gradient: ['#4B0082', '#00FF7F'], text: 'Aurora Reflection' },
  { name: 'waterfall-1.svg', gradient: ['#4682B4', '#87CEEB'], text: 'Skógafoss Rainbow' },
  { name: 'waterfall-2.svg', gradient: ['#2F4F4F', '#87CEEB'], text: 'Behind Seljalandsfoss' },
  { name: 'glacier-1.svg', gradient: ['#00BFFF', '#E0F6FF'], text: 'Crystal Ice Cave' }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

gallery.forEach(image => {
  const svg = createSVGPlaceholder(1200, 900, image.gradient, image.text);
  const filePath = path.join(imagesDir, image.name);
  fs.writeFileSync(filePath, svg);
  console.log(`Created ${image.name}`);
});

console.log('Gallery placeholder images created successfully!');
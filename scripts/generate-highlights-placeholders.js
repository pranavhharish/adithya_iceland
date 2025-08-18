// Generate placeholder images for trip highlights
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
    <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

const highlights = [
  { name: 'golden-circle.svg', gradient: ['#FFD700', '#FFA500'], text: 'Golden Circle' },
  { name: 'waterfalls.svg', gradient: ['#4682B4', '#87CEEB'], text: 'Waterfalls' },
  { name: 'diamond-beach.svg', gradient: ['#2F4F4F', '#708090'], text: 'Diamond Beach' },
  { name: 'dc3-wreck.svg', gradient: ['#696969', '#A9A9A9'], text: 'DC-3 Wreck' },
  { name: 'ice-cave.svg', gradient: ['#00BFFF', '#87CEFA'], text: 'Ice Cave' },
  { name: 'geothermal.svg', gradient: ['#FF6347', '#FF7F50'], text: 'Geothermal' },
  { name: 'northern-lights.svg', gradient: ['#9370DB', '#00FF7F'], text: 'Northern Lights' }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'highlights');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

highlights.forEach(highlight => {
  const svg = createSVGPlaceholder(800, 600, highlight.gradient, highlight.text);
  const filePath = path.join(imagesDir, highlight.name);
  fs.writeFileSync(filePath, svg);
  console.log(`Created ${highlight.name}`);
});

console.log('Highlights placeholder images created successfully!');
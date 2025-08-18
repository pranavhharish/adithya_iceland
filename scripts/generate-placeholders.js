// Simple script to create placeholder images using HTML5 Canvas
// This creates basic gradient placeholders for development

const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder generator
function createSVGPlaceholder(width, height, gradient, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradient[0]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradient[1]};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

// Create placeholder images
const placeholders = [
  {
    name: 'iceland-1.jpg',
    gradient: ['#1E3A5F', '#00D4AA'],
    text: 'Northern Lights'
  },
  {
    name: 'iceland-2.jpg',
    gradient: ['#2C5F75', '#4A90A4'],
    text: 'Gullfoss Falls'
  },
  {
    name: 'iceland-3.jpg',
    gradient: ['#34495E', '#2C3E50'],
    text: 'Diamond Beach'
  },
  {
    name: 'iceland-4.jpg',
    gradient: ['#74B9FF', '#0984E3'],
    text: 'Ice Cave'
  },
  {
    name: 'iceland-5.jpg',
    gradient: ['#6C5CE7', '#A29BFE'],
    text: 'Svartifoss'
  }
];

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'hero');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholders
placeholders.forEach(placeholder => {
  const svg = createSVGPlaceholder(1920, 1080, placeholder.gradient, placeholder.text);
  const filePath = path.join(imagesDir, placeholder.name.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svg);
  console.log(`Created ${placeholder.name.replace('.jpg', '.svg')}`);
});

console.log('Placeholder images created successfully!');
const fs = require('fs');
const path = require('path');

const webpFolder = './Webp';
const outputFile = './image-list.js';

// Read all files from the Webp folder
const files = fs.readdirSync(webpFolder)
    .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.webp', '.svg', '.jpg', '.jpeg', '.png'].includes(ext);
    })
    .sort();

// Generate the JavaScript file
const content = `// Auto-generated image list - DO NOT EDIT MANUALLY
const basePath = 'Webp/';
const webpFiles = ${JSON.stringify(files, null, 4)};
const fullPathWebpFiles = webpFiles.map(file => basePath + encodeURIComponent(file));
`;

fs.writeFileSync(outputFile, content);
console.log(`✅ Generated ${outputFile} with ${files.length} images`);
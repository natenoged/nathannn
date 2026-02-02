const fs = require('fs');
const path = require('path');

const webpFolder = path.join(__dirname, 'Webp');
const outputFile = path.join(__dirname, 'image-list.js');

// Read all files from the Webp folder (NOT subfolders)
const files = fs.readdirSync(webpFolder, { withFileTypes: true })
    .filter(dirent => dirent.isFile()) // Only files, not directories
    .map(dirent => dirent.name)
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
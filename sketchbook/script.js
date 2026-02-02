
// Auto-generated image list - DO NOT EDIT MANUALLY
const basePath = 'Webp/';
const webpFiles = [
    // This will be populated by GitHub Actions
];
const fullPathWebpFiles = webpFiles.map(file => basePath + encodeURIComponent(file));

// Counter to keep track of z-index for bringing images to the front
let zIndexCounter = 1;

// Function to create a draggable image container
function createDraggableImage(src) {
    const container = document.createElement('div');
    container.className = 'image-container';

    const img = document.createElement('img');
    img.src = src;
    img.ondragstart = () => false;

    const test = 150;
    container.style.left = `${Math.random() * (window.innerWidth - test)}px`;
    container.style.top = `${Math.random() * (window.innerHeight - test)}px`;
    container.style.width = `${(test)}px`;
    container.style.zIndex = zIndexCounter++;

    container.addEventListener('mousedown', startDrag);
    container.appendChild(img);
    document.body.appendChild(container);
    
    // Add slight delay before showing the container
    setTimeout(() => {
        container.classList.add('loaded');
    }, 100);
}

// Function to load images sequentially with a delay
function loadImagesSequentially() {
    let index = 0; // Start with the first image

    // Interval function to load images one by one
    const interval = setInterval(() => {
        if (index < fullPathWebpFiles.length) {
            createDraggableImage(fullPathWebpFiles[index]);
            index++; // Move to the next image
        } else {
            clearInterval(interval); // Stop when all images are loaded
        }
    }, 40); // Adjust interval time (in milliseconds) for pacing
}

// Function to handle dragging of an image container
function startDrag(e) {
    const container = e.currentTarget;

    // Bring the clicked container to the front
    container.style.zIndex = zIndexCounter++;

    // Prevent dragging when resizing the container
    if (e.target.tagName === 'IMG') {
        const initialX = e.clientX - container.getBoundingClientRect().left;
        const initialY = e.clientY - container.getBoundingClientRect().top;

        // Function to move the container while dragging
        const moveAt = (e) => {
            container.style.left = `${e.clientX - initialX}px`;
            container.style.top = `${e.clientY - initialY}px`;
        };

        // Stop dragging when the mouse is released
        const onMouseUp = () => {
            document.removeEventListener('mousemove', moveAt);
            document.removeEventListener('mouseup', onMouseUp);
        };

        // Attach mousemove and mouseup listeners
        document.addEventListener('mousemove', moveAt);
        document.addEventListener('mouseup', onMouseUp);
    }
}

// Load images when the page is fully loaded
window.onload = loadImagesSequentially;
let zIndexCounter = 1;

function createDraggableImage(src) {
    const container = document.createElement('div');
    container.className = 'image-container';
    
    const img = document.createElement('img');
    img.src = src;
    img.draggable = false;
    
    // Random position
    const size = 150;
    container.style.cssText = `
        left: ${Math.random() * (window.innerWidth - size)}px;
        top: ${Math.random() * (window.innerHeight - size)}px;
        width: ${size}px;
        z-index: ${zIndexCounter++};
    `;
    
    // Show container only after image loads
    img.onload = () => {
        setTimeout(() => container.classList.add('loaded'), 100);
    };
    
    container.onmousedown = startDrag;
    container.appendChild(img);
    document.body.appendChild(container);
}

function loadImagesSequentially() {
    let index = 0;
    const interval = setInterval(() => {
        if (index < fullPathWebpFiles.length) {
            createDraggableImage(fullPathWebpFiles[index++]);
        } else {
            clearInterval(interval);
        }
    }, 40);
}

function startDrag(e) {
    if (e.target.tagName !== 'IMG') return;
    
    const container = e.currentTarget;
    container.style.zIndex = zIndexCounter++;
    
    const startX = e.clientX - container.offsetLeft;
    const startY = e.clientY - container.offsetTop;
    
    const moveAt = (e) => {
        container.style.left = `${e.clientX - startX}px`;
        container.style.top = `${e.clientY - startY}px`;
    };
    
    const stopDrag = () => {
        document.removeEventListener('mousemove', moveAt);
        document.removeEventListener('mouseup', stopDrag);
    };
    
    document.addEventListener('mousemove', moveAt);
    document.addEventListener('mouseup', stopDrag);
}

window.onload = loadImagesSequentially;
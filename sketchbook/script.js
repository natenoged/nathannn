let zIndexCounter = 1;
let cascadeOffset = 0;

function createDraggableImage(src) {
    const container = document.createElement('div');
    container.className = 'image-container';
    
    const img = document.createElement('img');
    img.src = src;
    img.draggable = false;
    
    // Create rotation handle (invisible hitbox)
    const rotateHandle = document.createElement('div');
    rotateHandle.className = 'rotate-handle';
    
    // Random position
    const myArray = [150, 150];
    const size = myArray[Math.floor(Math.random() * myArray.length)];
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
    rotateHandle.onmousedown = startRotate;
    
    container.appendChild(img);
    container.appendChild(rotateHandle);
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

function startRotate(e) {
    e.stopPropagation();
    
    const container = e.currentTarget.parentElement;
    container.style.zIndex = zIndexCounter++;
    
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get current rotation
    const computedStyle = window.getComputedStyle(container);
    const matrix = computedStyle.transform;
    let currentRotation = 0;
    
    if (matrix !== 'none') {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        currentRotation = Math.atan2(b, a) * (180 / Math.PI);
    }
    
    // Calculate initial angle
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    const angleOffset = currentRotation - startAngle;
    
    const rotateAt = (e) => {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        container.style.transform = `rotate(${angle + angleOffset}deg)`;
    };
    
    const stopRotate = () => {
        document.removeEventListener('mousemove', rotateAt);
        document.removeEventListener('mouseup', stopRotate);
    };
    
    document.addEventListener('mousemove', rotateAt);
    document.addEventListener('mouseup', stopRotate);
}

window.onload = loadImagesSequentially;
let currentIndex = 0;
const images = [
    'images/ck.webp', 
    'images/cheese.webp', 
    'images/oc.jpg',
    // Add more image URLs here
    'images/cherryjam.webp',
    'images/lemon.webp',
    'images/mf.jpg',
    'images/tl.jpg',
    'images/CUSTARD.webp',
    'images/choux.webp',
    'images/d.jpg'
];

function showImage(index) {
    const img = document.querySelector('.bgimg');
    img.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', function () {
    showImage(currentIndex);
    
    document.querySelector('.arrow-left').addEventListener('click', prevImage);
    document.querySelector('.arrow-right').addEventListener('click', nextImage);
});

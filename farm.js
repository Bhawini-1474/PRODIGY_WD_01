let currentIndex = 0;
const images = ['images/moo.avif', 'images/sbb.avif', 'images/carrot.avif']; 

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

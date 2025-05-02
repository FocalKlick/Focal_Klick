// CONFIG: Add your EXACT image filenames here
const images = [
    'photo1.jpg',
    'photo2.jpg'  // Add/remove as needed
];

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery-container');
    
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `https://focalklick.github.io/Focal_Klick/images/${filename}`;
        img.alt = 'Gallery photo';
        img.style.width = '100%';
        img.style.margin = '10px 0';
        gallery.appendChild(img);
    });

    document.querySelector('.loading-message').remove();
});

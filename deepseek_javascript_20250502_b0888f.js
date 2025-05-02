document.addEventListener('DOMContentLoaded', function() {
    // Sample image data - replace with your actual images
    const imageData = {
        featured: [
          { src: './images/featured1.jpg' }
        ],
        nature: [
            { src: './images/featured1.jpg' }
        ],
        travel: [
           { src: './images/featured1.jpg' }
        ],
        portraits: [
           { src: './images/featured1.jpg' }
        ]
    };

    // Populate galleries with images
    for (const category in imageData) {
        const gallery = document.querySelector(`#${category} .gallery`);
        
        if (gallery) {
            imageData[category].forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.dataset.caption = image.caption;
                gallery.appendChild(imgElement);
            });
        }
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            captionText.innerHTML = this.dataset.caption;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

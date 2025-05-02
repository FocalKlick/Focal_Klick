document.addEventListener('DOMContentLoaded', function() {
    // Sample image data - replace with your actual images
    const imageData = {
        featured: [
            { src: 'images/featured1.jpg', alt: 'Featured sunset', caption: 'Beautiful sunset at the beach' },
            { src: 'images/featured2.jpg', alt: 'Featured mountain', caption: 'Snowy mountain peak' },
            { src: 'images/featured3.jpg', alt: 'Featured city', caption: 'City skyline at night' }
        ],
        nature: [
            { src: 'images/nature1.jpg', alt: 'Forest path', caption: 'Sunlit forest path in autumn' },
            { src: 'images/nature2.jpg', alt: 'Waterfall', caption: 'Majestic waterfall in the mountains' },
            { src: 'images/nature3.jpg', alt: 'Wildflowers', caption: 'Colorful wildflowers in spring' },
            { src: 'images/nature4.jpg', alt: 'Desert', caption: 'Vast desert landscape' }
        ],
        travel: [
            { src: 'images/travel1.jpg', alt: 'Paris', caption: 'Eiffel Tower at sunrise' },
            { src: 'images/travel2.jpg', alt: 'Tokyo', caption: 'Busy streets of Tokyo' },
            { src: 'images/travel3.jpg', alt: 'Venice', caption: 'Gondolas in Venice canals' }
        ],
        portraits: [
            { src: 'images/portrait1.jpg', alt: 'Woman portrait', caption: 'Studio portrait with natural light' },
            { src: 'images/portrait2.jpg', alt: 'Man portrait', caption: 'Urban street portrait' },
            { src: 'images/portrait3.jpg', alt: 'Child portrait', caption: 'Candid child portrait' }
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
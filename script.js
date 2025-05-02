document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery-container');
    const loadingMsg = document.querySelector('.loading-message');
    
    // Replace with YOUR actual image paths
    const images = [
        '/Focal_Klick/images/photo1.jpg',
        '/Focal_Klick/images/photo2.jpg',
        '/Focal_Klick/images/photo3.jpg'
    ];
    
    // Create gallery items
    images.forEach(imgUrl => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = 'Gallery photo';
        
        item.appendChild(img);
        gallery.appendChild(item);
    });
    
    loadingMsg.style.display = 'none';
});
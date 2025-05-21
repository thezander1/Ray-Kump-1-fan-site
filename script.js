// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add gallery lightbox effect (basic alert for demo)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Replace this with a lightbox gallery plugin like Lightbox2 or a custom modal!');
    });
});

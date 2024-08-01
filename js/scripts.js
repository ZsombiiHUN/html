window.addEventListener('scroll', function() {
    var intro = document.getElementById('intro');
    var opacity = 1 - window.scrollY / window.innerHeight;
    intro.style.opacity = opacity;
    if (opacity <= 0) {
        intro.style.display = 'none';
    } else {
        intro.style.display = 'flex';
    }
});

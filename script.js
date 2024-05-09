
let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.carousel-container img');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

// Exibir o primeiro slide ao carregar a página

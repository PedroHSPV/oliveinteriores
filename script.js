// Este trecho de código será executado quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Aqui, estamos obtendo a referência para o elemento do logotipo com o ID "logo"
    var logo = document.getElementById("logo");

    // Adicionamos a classe "fade-in" ao elemento do logotipo
    // Isso adiciona um efeito de fade-in ao elemento, controlado pelas regras CSS da classe "fade-in"
    logo.classList.add("fade-in");
});
// JavaScript para exibir/ocultar os links ao clicar no ícone do menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

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
changeSlide(0);
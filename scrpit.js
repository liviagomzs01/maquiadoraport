// Função para navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação do título principal ao carregar a página
window.addEventListener('load', () => {
    const titulo = document.getElementById('titulo-principal');
    titulo.style.opacity = 0;
    titulo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        titulo.style.transition = 'all 1s ease-out';
        titulo.style.opacity = 1;
        titulo.style.transform = 'translateY(0)';
    }, 100);
});

// Efeito de zoom nas imagens da galeria
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoom');
    });
});

// Efeito de zoom nas imagens de foto principal
const mainImage = document.querySelector('.container img');
if (mainImage) {
    mainImage.addEventListener('click', () => {
        mainImage.classList.toggle('zoom');
    });
};

// Adiciona a classe zoom para o efeito de ampliação
const style = document.createElement('style');
style.innerHTML = `
    .zoom {
        transform: scale(1.5);
        transition: transform 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

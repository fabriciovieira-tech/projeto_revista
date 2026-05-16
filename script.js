document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que possuem classes de animação
    const elementsToAnimate = document.querySelectorAll('.fade-up, .fade-in');

    // Configura o observador (dispara quando 15% do elemento estiver visível)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa o CSS de transição
                entry.target.classList.add('is-visible');
                // Deixa de observar após animar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Inicia a observação para cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

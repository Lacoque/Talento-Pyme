document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, index * 300);
            }
        });
    }, { threshold: 1.0 });

    document.querySelectorAll(".slide-in-bottom").forEach((element) => {
        observer.observe(element);
    });


    function splitTextoYAnimar(elemento) {
    const textoOriginal = elemento.textContent;
    elemento.innerHTML = '';

    textoOriginal.split('').forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        elemento.appendChild(span);
    });

    anime({
        targets: elemento.querySelectorAll('span'),
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(30),
        easing: 'easeOutExpo',
        duration: 800
    });
    }

    const theObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        splitTextoYAnimar(entry.target);
        obs.unobserve(entry.target); // Se ejecuta solo una vez
        }
    });
    }, { threshold: 0.3 }); // Se activa cuando 30% del elemento es visible

    document.querySelectorAll('.anim').forEach(el => theObserver.observe(el));


});
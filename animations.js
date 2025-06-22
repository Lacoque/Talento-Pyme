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

    // let tween = gsap.to(".clientes", { y: -50 }),
    //     st = ScrollTrigger.create({
    //         trigger: ".clientes",
    //         start: "top center",
    //         end: "+=500",
    //         animation: tween,
    // });

    // console.log(st.animation);


});
window.addEventListener("load", () => {
    const container = document.querySelector(".container");
    if (container) {
        container.style.opacity = "0";
        container.style.transform = "translateY(20px)";

        setTimeout(() => {
            container.style.transition = "all 0.6s ease";
            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
        }, 100);
    }
});

window.addEventListener("load", () => {
    const needle = document.querySelector(".needle");
    if (needle) {
        const angle = needle.style.transform;
        needle.style.transform = "rotate(0deg)";

        setTimeout(() => {
            needle.style.transition = "transform 0.8s ease";
            needle.style.transform = angle;
        }, 200);
    }
});

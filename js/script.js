document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = button.getAttribute("href"); // Obtiene el ID del destino
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth" // Activa el desplazamiento animado
                });
            }
        });
    });
});

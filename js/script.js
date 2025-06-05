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

// Logica para mostrar el menu de navegación en pantallas pequeñas
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const modal = document.getElementById("demoModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".modal .close");

openBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

/* 
    🎮 Quest Complete!
        ────────────────────────────
        👾 Coder: Kirby Nerd
        📦 Mission: Deploy Hospitality Web
        🧠 Wisdom: +10 | 💻 Skill: +15
        ✨ Special Ability: "Code Absorption"
        🔒 Hidden Easter Egg: You found the dev's mark!

        // If you learned something, share it 💡
*/

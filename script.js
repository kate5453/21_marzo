// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         const audio = new Audio("floresamarillas.mp3");
//         audio.play().catch(error => console.log("Autoplay bloqueado:", error));
//     }, 700);
// });

document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.innerText = "Iniciar Música";
    button.style.display = "none"; // Oculta el botón

    document.body.appendChild(button);

    setTimeout(() => {
        button.click(); // Simula el click para permitir el autoplay

        const audio = new Audio("floresamarillas.mp3");
        audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }, 700);
});


function createFlower() {
    const flowerContainer = document.querySelectorAll(".flower-container");

    console.log(flowerContainer);
    flowerContainer.forEach(container => {
            
        const flower = document.createElement("div");
        flower.classList.add("flor");
        // flower.style.animation = "fadeInFlower 1s ease-in-out both"; // Agregar animación de entrada a la flor

        flower.style.position = "fixed";


        for (let i = 1; i <= 10; i++) {
            const petal = document.createElement("div");
            petal.classList.add("petal", `p${i}`);
            flower.appendChild(petal);

            // Tiempo aleatorio de desaparición entre 2 y 5 segundos
            const disappearanceTime = Math.random() * 3000 + 2000;

            // Agrega una animación de salida a los pétalos con el tiempo aleatorio de desaparición
            petal.style.animation = `fadeOutPetal 0.75s ease-in-out both ${i * 0.1}s, fadeOutFlower 0.75s ease-in-out both ${disappearanceTime}s`;
        }

        // flower.style.left = `${randomX}px`;
        // flower.style.top = `${randomY}px`;

        container.appendChild(flower);
        console.log(container);

    });
}

// Cambia el intervalo de tiempo para controlar la aparición de las flores cada 3 segundos
setInterval(createFlower,1000); // Nuevas flores cada 3 segundos
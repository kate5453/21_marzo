// document.addEventListener("click", () => {
//     // const audio = new Audio("floresamarillas.mp3");
//     // audio.play().catch(error => console.log("Autoplay bloqueado:", error));
//     setTimeout(() => {
//         const audio = new Audio("floresamarillas.mp3");
//         audio.play().catch(error => console.log("Autoplay bloqueado:", error));
//     }, 700);
// }, { once: true }); // Solo se ejecuta una vez
let audio;

document.getElementById("start-btn").addEventListener("click", () => {
    // Ocultar el botón de inicio
    document.getElementById("start-btn").style.display = "none";

    // Mostrar el contenido con animaciones
    let content = document.getElementById("content");
    content.classList.remove("hidden");
    content.classList.add("fade-in");

    // Hacer visibles los elementos con la clase .show
    document.querySelectorAll(".buttons, .flowers, p").forEach(el => {
        el.classList.add("show");
    });

    // Cambia el intervalo de tiempo para controlar la aparición de las flores cada 3 segundos
    // setInterval(createFlower,1000); // Nuevas flores cada 3 segundos
    setTimeout(() =>{
        createFlower();
    },700);

    // Reproducir la música
    setTimeout(() => {
        audio = new Audio("floresamarillas.mp3");
        audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }, 200); // Pequeño retraso para asegurar que se active después del clic
});

function showMessage(type) {
    let message = document.getElementById("message");
    message.style.fontSize = "20px";
    if (type === "like") {
        // Detener la música antes de redirigir
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reinicia el audio
        }

        message.innerHTML = "¡Gracias! 🌻✨";
        window.location.href = "https://wa.me/924200709?text=¡Gracias!%20🌻✨";
    } else {
        message.innerHTML = "Activa la racha 🥺";
    }
    message.classList.remove("hidden");
}

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


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
sidebar.classList.toggle("active");
});

/* Rocket Animation */

window.addEventListener("load", () => {

    const rocket = document.getElementById("rocket");

    setTimeout(() => {

        rocket.animate(
            [
                {
                    transform: "translate(0px, 0px)",
                    opacity: 1
                },
                {
                    transform: "translate(60px, -10px)",
                    opacity: 1
                },
                {
                    transform: "translate(140px, -60px)",
                    opacity: 0
                }
            ],
            {
                duration: 2200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }, 2000); // 👈 2 second pause

});
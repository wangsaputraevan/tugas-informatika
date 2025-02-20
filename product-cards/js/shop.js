const loadingScreen = document.querySelector("#loading-screen");
const loadingContainer = document.querySelector(".loading-container");

for (let i = 1; i <= 3; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "loading-screen-block");
    square.setAttribute("id", `block${i}`);
    square.style.scale = "90%";
    square.style.animationDelay = `${0.2 * (i - 1)}s`
    loadingContainer.appendChild(square);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        loadingScreen.style.transform = "translateY(-100%)";
        setTimeout(() => {
            document.documentElement.style.overflow = "visible";
            document.querySelector("footer").style.visibility = "visible";
        }, 1000);
    }, 0);
});



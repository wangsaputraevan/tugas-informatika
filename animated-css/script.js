const dotCount = 40;
const animationContainer = document.querySelector(".wrapper");
console.log("js started");

for (let i = 0; i < 40; i++) {
    let divElement = document.createElement("div");
    divElement.classList.add("dot");
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    divElement.style.top = `${randomTop}%`;
    divElement.style.left = `${randomLeft}%`;
    const randomDuration = 5 + Math.random() * 15;
    divElement.style.animation = `animation-css ${randomDuration}s linear infinite`;
    animationContainer.appendChild(divElement);
    console.log(`div with index ${i} added`);
}

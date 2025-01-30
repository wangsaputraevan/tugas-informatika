console.log("JavaScript successfully!");
function changeBg() {
    if (document.querySelector(".content-dark") == null) {
        document.querySelector(".sidenav").classList.add("sidenav-dark");
        document.querySelector(".content").classList.add("content-dark");
        document.querySelector(".dark-mode-btn").innerHTML = "Light Mode";
    } else {
        document.querySelector(".sidenav").classList.remove("sidenav-dark");
        document.querySelector(".content").classList.remove("content-dark");
        document.querySelector(".dark-mode-btn").innerHTML = "Dark Mode";
    }
}
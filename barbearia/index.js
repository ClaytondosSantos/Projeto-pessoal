const botaoMenu = document.querySelector(".menu");

function mostrarEsconderMenu() {

    if(window.innerWidth < 1100){
        if (botaoMenu.style.display === "block") {
            botaoMenu.style.display = "none";
        } else {
            botaoMenu.style.display = "block";
        }
        botaoMenu.style.left = "50%";
        botaoMenu.style.transform = "translateX(-50%)";
        botaoMenu.style.left = "1px";
        botaoMenu.style.transform = "translateX(0)";
    } 
}
document.getElementById("menu").addEventListener("click", mostrarEsconderMenu);













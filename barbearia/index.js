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









let adicionarData = [];
let datasPreenchidas = [];
let novaData = [];

function confirmar() {  
   adicionarData.date
    if (adicionarData.push(novaData)) {
        console.log("Data adicionada com sucesso: " + novaData);
    } else {      
        datasPreenchidas.includes(novaData);
        console.log("Data já preenchida. Por favor, escolha outra data.");
    }
}

document.addEventListener("click", confirmar);




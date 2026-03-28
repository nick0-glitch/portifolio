window.onload = function() {
    document.getElementById("btnMensagem")
    .addEventListener("click", function() {
        alert("Obrigado por visitar meu portfólio!");
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const secoes = document.querySelectorAll("section");

    secoes.forEach((secao, index) => {
        setTimeout(() => {
            secao.classList.add("ativo");
        }, index * 400);
    });
});

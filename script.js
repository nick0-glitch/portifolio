document.addEventListener("DOMContentLoaded", function () {

    // BOTÃO
    document.getElementById("btnMensagem")
    .addEventListener("click", function() {
        alert("Obrigado por visitar meu portfólio!");
    });

    // ANIMAÇÃO DAS SEÇÕES
    const secoes = document.querySelectorAll("section");

    secoes.forEach((secao, index) => {
        setTimeout(() => {
            secao.classList.add("ativo");
        }, index * 400);
    });

});

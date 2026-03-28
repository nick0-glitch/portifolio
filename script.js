document.addEventListener("DOMContentLoaded", function () {

    // ===== ANIMAÇÃO DAS SEÇÕES =====
    const secoes = document.querySelectorAll(".section");

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("ativo");
                }, index * 200);
            }
        });
    }, observerOptions);

    secoes.forEach(secao => observer.observe(secao));

    // ===== BOTÃO COM MENSAGEM PERSONALIZADA =====
    const btnMensagem = document.getElementById("btnMensagem");
    
    btnMensagem.addEventListener("click", function() {
        const mensagens = [
            "🎉 Obrigado por visitar meu portfólio!",
            "💻 Vamos criar algo incrível juntos?",
            "🚀 Sempre em busca de novos desafios!",
            "📧 Sinta-se à vontade para entrar em contato!",
            "✨ Seu suporte é muito importante para mim!"
        ];
        
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        alert(mensagemAleatoria);
    });

    // ===== SUAVIZAÇÃO DE SCROLL PARA LINKS ÂNCORAs =====
    const links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const alvo = document.querySelector(this.getAttribute("href"));
            
            if (alvo) {
                alvo.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ===== EFEITO NO HEADER AO ROLAR =====
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

});
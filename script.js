AOS.init();

document.querySelectorAll('.nav-container a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Obtém o ID da seção correspondente ao link
        var targetId = this.getAttribute('href').substring(1);

        // Obtém a seção correspondente ao ID
        var targetSection = document.getElementById(targetId);

        // Verifica se a seção existe
        if (targetSection) {
            // Adiciona a regra de suavização de rolagem
            document.documentElement.style.scrollBehavior = 'smooth';

            // Remove a regra de suavização de rolagem após 1 segundo (1000 ms)
            setTimeout(function() {
                document.documentElement.style.scrollBehavior = 'auto';
            }, 1000);
            
            // Rola para a seção correspondente
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('fa-times');
            mobileMenuBtn.classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Validação do formulário de agendamento
    const agendamentoForm = document.querySelector('.agendamento-form');
    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const telefone = this.querySelector('input[type="tel"]');
            const especialidade = this.querySelector('select');
            
            if (!nome.value.trim()) {
                alert('Por favor, preencha seu nome');
                nome.focus();
                return;
            }
            
            if (!email.value.trim()) {
                alert('Por favor, preencha seu e-mail');
                email.focus();
                return;
            }
            
            if (!telefone.value.trim()) {
                alert('Por favor, preencha seu telefone');
                telefone.focus();
                return;
            }
            
            if (!especialidade.value) {
                alert('Por favor, selecione uma especialidade');
                especialidade.focus();
                return;
            }
            
            // Simulação de envio
            alert('Solicitação de agendamento enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.especialidade-card, .medico-card, .diferencial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos com opacidade 0 para animação
    document.querySelectorAll('.especialidade-card, .medico-card, .diferencial').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});

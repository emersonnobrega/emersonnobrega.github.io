// Configuração dos Projetos - Fácil de Adicionar Novos
const projects = [
    {
        title: "Análise Desafio Vendas",
        description: "Análise exploratória de dados de vendas para identificação de padrões de consumo e performance de produtos utilizando Python e Pandas.",
        techs: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/emersonnobrega/Analise_desafio_vendas"
    },
    {
        title: "Data Analysis Cafeteria",
        description: "Processamento e visualização de dados operacionais de uma cafeteria para otimização de estoque e previsão de demanda.",
        techs: ["SQL", "Python", "ETL", "Excel"],
        github: "https://github.com/emersonnobrega/Analise_dados_cafeteria"
    }
];

// Função para carregar projetos
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-badges">
                ${project.techs.map(tech => `<span class="badge">${tech}</span>`).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Ver no GitHub
            </a>
        `;
        container.appendChild(card);
    });
}

// Efeito de scroll na Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // Animação de entrada suave para elementos
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
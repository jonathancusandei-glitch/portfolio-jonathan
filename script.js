/* ==========================================================================
   SCRIPT & BASE DE DADOS DE PROJETOS — JONATHAN CAMPOS CUSANDEI
   ========================================================================== */

const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/jonathancusandei/",
  instagram: "https://www.instagram.com/jonathan.campos.c/",
  whatsapp: "https://wa.me/5533984219646",
  email: "mailto:jonathancusandei@gmail.com",
  // Se desejar apontar direto para o link compartilhado da pasta "05 - Certificados" no Google Drive, basta colar abaixo:
  driveCertificados: "https://drive.google.com/drive/folders/1a7LQ4NkBHIOzWLHPlceOv_vfF8xGvp0C?usp=sharing"
};

const CASE_STUDIES = {
  "vale-silvestre": {
    badge: "Automação, IA & Revenue Operations",
    date: "Out/2026 – Atual",
    title: "Auditoria de Funil Comercial/IA, Integração de Sistemas & Catálogo Web — Pousada Vale Silvestre Eco Park",
    client: "Pousada Vale Silvestre Eco Park (Hotelaria, Eventos & Lazer)",
    problem: "A operação hoteleira contava com alto volume de atendimentos automatizados via IA (Sophia AI / AskSuite), porém enfrentava baixa conversão das cotações geradas à noite, custos elevados com disparos de templates de WhatsApp (categoria Marketing vs. Utilidade) e risco de overbooking pela falta de integração fluida entre o motor de reservas, PMS e atendimento.",
    solution: [
      "Auditoria de Dados e Funil Comercial: Extração e cruzamento completo das bases de atendimento da plataforma AskSuite (2.913 atendimentos auditados e 1.396 oportunidades qualificadas analisadas).",
      "Reengenharia de Processos e Sistemas: Estruturação do fluxo operacional integrando PMS FastHotel, ERP/Motor Desbravador, AskSuite (Sophia AI) e diretório digital concierge InnCard (inncard.app) com trava anti-overbooking.",
      "Otimização de Custos de API Meta (WhatsApp): Redesenho da estratégia de templates (migração estratégica de mensagens para janela de 24h e templates de Utilidade, reduzindo em até 4x o custo por disparo).",
      "Desenvolvimento de Sistemas Web Próprios: Construção e deploy no Netlify do Site Catálogo Interativo de Hospedagem e Lazer integrado ao WhatsApp, além do Sistema Gerador de Cartões de Consumo (01 a 200) com QR Codes e Painel de Teste de Comandas para o ERP Desbravador."
    ],
    results: [
      "R$ 1.551.930,21 em intenção de compra represada diagnosticada e organizada em esteira de recuperação comercial.",
      "Identificação de que 70% da demanda qualificada ocorria no período noturno sem follow-up ativo na manhã seguinte.",
      "Unificação e higienização da base histórica de clientes (Clientes_AskSuite_Unificado.xlsx) para campanhas segmentadas.",
      "Padronização de 200 cartões de consumo físico/digital via QR Code integrados à operação do parque e restaurante."
    ],
    tools: ["Análise de Dados", "Excel Avançado", "AskSuite (Sophia AI)", "ERP Desbravador", "PMS FastHotel", "InnCard", "HTML5/CSS3/JS", "Netlify", "WhatsApp Business API"]
  },

  "agente-juridico": {
    badge: "Agentes de IA & Automação Python",
    date: "Set/2026",
    title: "Arquitetura de Agentes de IA & Automação de Contratos via ZapSign — Escritório Dr. Rafael Siqueira",
    client: "Escritório de Advocacia Dr. Rafael Siqueira Rodrigues",
    problem: "O escritório recebia demandas recorrentes no WhatsApp para áreas específicas (Direito Médico/Auxílio-Moradia na Residência, Ações Indenizatórias Samarco e Direito Civil/Família), exigindo triagem manual demorada, coleta repetitiva de documentos e preenchimento manual de procurações e contratos.",
    solution: [
      "Arquitetura Multi-Agente de IA: Criação de um Agente Orquestrador de WhatsApp aliado a Subagentes Especialistas com prompts estruturados para qualificar cada caso jurídico com empatia e precisão técnica.",
      "Automação Documental em Python: Desenvolvimento de script automatizado (processar_cliente.py com biblioteca pyfpdf) que recebe os dados coletados na triagem e gera instantaneamente a Procuração Ad Judicia e o Contrato de Honorários em PDF.",
      "Integração via API com ZapSign: Conexão direta com a API REST da ZapSign para upload do PDF e geração imediata do link de assinatura digital enviado ao cliente no próprio WhatsApp."
    ],
    results: [
      "Redução do tempo de triagem e emissão contratual de horas para poucos segundos (fluxo 100% autônomo 24/7).",
      "Eliminação de erros manuais de digitação de CPF, endereço e cláusulas específicas de honorários.",
      "Aumento da taxa de fechamento no primeiro contato graças à assinatura digital imediata pelo celular."
    ],
    tools: ["Python", "pyfpdf", "API REST ZapSign", "Agentes de IA (LLMs)", "Engenharia de Prompt", "Automação de WhatsApp", "JSON/Webhooks"]
  },

  "gv-digital-n8n": {
    badge: "Automação, n8n & Engenharia de CRM",
    date: "Mar/2025 – 2026",
    title: "Ecossistema de Workflows n8n, Integração de APIs, DeskcommCRM & Monitoramento em Tempo Real",
    client: "GV Digital Solution & Projetos de Consultoria Técnica",
    problem: "Empresas locais e operações digitais sofriam com perda de leads, falta de centralização no atendimento via WhatsApp, retrabalho manual entre planilhas e ausência de monitoramento automatizado de canais e oportunidades.",
    solution: [
      "Desenvolvimento de Workflows no n8n: Construção de fluxos avançados integrando APIs REST, Webhooks, bancos de dados relacionais e agentes de IA generativa para triagem, classificação e roteamento de atendimento.",
      "Engenharia de Confiabilidade: Implementação de validação de dados de entrada, tratamento de exceções, logs de auditoria e alertas automáticos de falha.",
      "Implantação de CRM & Dashboards: Configuração e manutenção de DeskcommCRM (Open-Source AI CRM), construção de CRM Dashboard Web próprio (crm_dashboard.html + API REST) e desenvolvimento de bots assíncronos em Python (Telethon) para monitoramento em tempo real no Telegram."
    ],
    results: [
      "Padronização do atendimento digital e redução drástica de tarefas manuais repetitivas.",
      "Rastreabilidade ponta a ponta do funil de vendas desde a captação até o pós-venda.",
      "Arquitetura modular reutilizável para múltiplos nichos (saúde, estética, varejo e serviços)."
    ],
    tools: ["n8n", "APIs REST", "Webhooks", "Python (Telethon)", "DeskcommCRM", "JavaScript", "SQLite/PostgreSQL", "WhatsApp API"]
  },

  "trafego-seo-gmn": {
    badge: "BI de Marketing, Meta Ads & Automação SEO",
    date: "2025 – 2026",
    title: "Business Intelligence para Tráfego Pago (Meta Ads API) & Pipeline Automatizado de SEO Local (GMN)",
    client: "DANAY (Brand & Beachwear), Helton Fontes, Redes de Supermercados & Clínicas",
    problem: "Necessidade de otimizar o Retorno sobre Investimento (ROAS/CPA) em campanhas de Meta Ads com análise granular de dados e escalar o posicionamento orgânico local no Google Meu Negócio (GMN) para redes varejistas e clínicas.",
    solution: [
      "Extração e BI de Campanhas Meta Ads: Desenvolvimento de scripts em Python (fetch_meta_ads.py e parse_ads.py) integrados à API da Meta para extração de métricas de campanhas (impressões, CTR, CPC, conversões, custo por mensagem) e geração de relatórios executivos para marcas como DANAY e Helton Fontes.",
      "Pipeline Automatizado de SEO Local (GMN): Criação de ferramenta em Python + Playwright + banco SQLite (prospector.db) para auditoria local e injeção automatizada de metadados EXIF e coordenadas GPS em ativos visuais (aplicado em redes como Supermercados Costão em GV, Caratinga, Ipatinga e Manhuaçu, e Archimedes Supermercado).",
      "Desenvolvimento Web de Alta Conversão: Criação de mais de 10 Landing Pages otimizadas para clínicas de estética e negócios locais."
    ],
    results: [
      "Tomada de decisão orientada por dados reais da API do Meta Ads, otimizando alocação de orçamento entre campanhas institucionais e de conversão direta.",
      "Automação completa do processo de otimização semântica e geográfica (SEO Local) para múltiplas filiais simultaneamente."
    ],
    tools: ["Meta Ads (Gerenciador & API)", "Python", "Playwright", "SQLite", "BI & Análise de Métricas", "Google Meu Negócio (SEO Local)", "HTML/CSS/JS"]
  },

  "artigo-recuperacao-b3": {
    badge: "Finanças Corporativas & Contabilidade Societária",
    date: "2026 • Pesquisa UFJF",
    title: "Análise da Eficácia da Recuperação Judicial na Reestruturação Econômico-Financeira na B3 (2022–2025)",
    client: "Pesquisa Científica em Finanças Corporativas — UFJF",
    problem: "Avaliar empiricamente se o instituto da Recuperação Judicial (Lei nº 11.101/2005) tem sido eficaz para restaurar a solvência, liquidez e rentabilidade operacional de companhias abertas brasileiras listadas na B3 no período pós-choque de juros (2022 a 2025).",
    solution: [
      "Coleta e Padronização de Demonstrações Contábeis: Levantamento longitudinal (2022–2025) de Balanços Patrimoniais (BP) e Demonstrações do Resultado do Exercício (DRE) de 6 companhias abertas em RJ: Atma (ATMP3), Rossi Residencial (RSID3), Paranapanema (PMAM3), Americanas (AMER3), Nexpe (NEXP3) e Light (LIGT3).",
      "Modelagem de Indicadores Econômico-Financeiros: Cálculo de Liquidez Corrente (LC), Liquidez Geral (LG), Capital Circulante Líquido (CCL), Participação de Capitais de Terceiros (PCT), Endividamento Geral (EG), ROA, ROE, Margem Líquida e Margem EBITDA (LAJIDA).",
      "Rigor Metodológico Contábil: Tratamento analítico de Passivo a Descoberto (Patrimônio Líquido Negativo) e identificação de falsos positivos matemáticos no ROE (quando Prejuízo Líquido dividido por PL Negativo gera índice algebricamente positivo)."
    ],
    results: [
      "Demonstração empírica da dicotomia entre reestruturação meramente financeira (haircuts e conversão de dívida que inflam artificialmente a Margem Líquida no ano da homologação, como em AMER3 em 2024) e recuperação operacional genuína (sustentada por geração de caixa e Margem EBITDA consistente, como na infraestrutura de LIGT3).",
      "Artigo estruturado com padrão acadêmico rigoroso para submissão científica."
    ],
    tools: ["Análise de Demonstrações Financeiras", "Indicadores de Liquidez/Solvência", "EBITDA / ROA / ROE", "B3 / CVM", "Excel Avançado", "Pesquisa Quantitativa"]
  },

  "econometria-banco-horizonte": {
    badge: "Econometria, Estatística & Python/Jamovi",
    date: "2026 • UFJF (CAD026)",
    title: "Modelagem Econométrica (Regressão Linear Múltipla) & Diagnóstico de Multicolinearidade — Caso Banco Horizonte",
    client: "Disciplina Métodos Quantitativos Aplicados à Administração (CAD026 — UFJF)",
    problem: "Identificar estatisticamente quais variáveis socioeconômicas e comportamentais determinam o volume total investido por clientes do Banco Horizonte (n = 180) para orientar políticas de segmentação, assessoria financeira e alocação de marketing.",
    solution: [
      "Estimação por Mínimos Quadrados Ordinários (MQO): Modelagem de Regressão Linear Múltipla no software Jamovi e validação cruzada em Python (statsmodels).",
      "Diagnóstico e Correção de Multicolinearidade Severa: O modelo irrestrito inicial apresentava inflação severa de variância (VIF > 20 entre Renda Mensal, Patrimônio e Aporte Mensal, que possuíam correlação r = 0,972), distorcendo sinais e p-valores.",
      "Reespecificação Parcimoniosa e Testes de Pressupostos: Remoção fundamentada das variáveis redundantes, reduzindo o VIF máximo para ~1,01, seguida de testes de normalidade dos resíduos (Shapiro-Wilk p = 0,536) e homocedasticidade.",
      "Inovação Técnica: Desenvolvimento de módulo/automação complementar para o Jamovi (jamovi-cad026)."
    ],
    results: [
      "Modelo final altamente explicativo e robusto: R² = 78,90% (R² ajustado = 77,91%), Estatística F(8, 171) = 79,92 (p < 0,001).",
      "Identificação precisa dos preditores estatisticamente significativos (p < 0,001): Renda Mensal (+R$ 5,70 investidos por R$ 1 de renda), Conhecimento Financeiro (+R$ 4.000,15 por ponto na escala) e Idade (+R$ 530,72 por ano), além da recomendação estratégica de realocar verba de campanhas genéricas para educação financeira."
    ],
    tools: ["Jamovi", "Python (statsmodels / pandas)", "Regressão Linear Múltipla", "Teste VIF / Shapiro-Wilk", "Estatística Inferencial", "Tomada de Decisão Baseada em Dados"]
  },

  "tcc-startup-nourish": {
    badge: "Plano de Negócios, Pesquisa de Mercado & Finanças",
    date: "2026 • TCC Graduação UFJF",
    title: "TCC: Plano de Negócios e Viabilidade Econômico-Financeira para a Startup Nourish Ltda.",
    client: "Trabalho de Conclusão de Curso em Administração — UFJF (Orientador: Prof. Dr. Renato Antônio de Almeida)",
    problem: "Consumidores com restrições alimentares severas (doença celíaca, intolerância à lactose, alergias) e público fitness em Governador Valadares enfrentam alto risco de contaminação cruzada e baixa transparência nutricional no mercado local de refeições.",
    solution: [
      "Pesquisa de Mercado Empírica (N = 156): Aplicação e processamento estatístico em Python (analisar_pesquisa.py) de survey estruturado com escalas Likert de 7 pontos e métricas Top-2 Box para mapear hábitos, dores e sensibilidade a preço.",
      "Engenharia Operacional & Rastreabilidade: Desenho de layout produtivo segregado (cross-contamination free) aliado a sistema de rastreabilidade nutricional e de lotes via QR Code na embalagem.",
      "Planejamento Estratégico & Financeiro: Elaboração completa do Business Model Canvas, Matriz SWOT, Mix de Marketing (4Ps), projeção de receitas, estrutura de custos fixos/variáveis, DRE projetada para 5 anos, Fluxo de Caixa Descontado, VPL, TIR e Payback."
    ],
    results: [
      "Validação empírica da demanda local e comprovação da viabilidade econômico-financeira do modelo híbrido (restaurante físico + delivery programado e assinaturas).",
      "Apresentação de banca de conclusão do Bacharelado em Administração na UFJF."
    ],
    tools: ["Plano de Negócios", "Viabilidade Financeira (VPL, TIR, Payback)", "Pesquisa de Mercado (N=156)", "Python (Análise de Dados)", "Business Model Canvas", "Engenharia de Operações"]
  },

  "qualidade-bpmn-cep": {
    badge: "Gestão da Qualidade, BPMN & Controle Estatístico",
    date: "2026 • UFJF (CAD056)",
    title: "Mapeamento de Processos (BPMN / SIPOC) e Controle Estatístico de Processos (CEP) — Govalpan & Papirus",
    client: "Estudos Práticos em Gestão da Qualidade (CAD056 — UFJF)",
    problem: "Divergências recorrentes entre estoque físico e contábil, perdas por avarias/vencimento e variabilidade operacional nos processos de recepção, armazenagem e expedição.",
    solution: [
      "Modelagem de Processos de Negócio: Mapeamento completo AS-IS / TO-BE utilizando notação BPMN (Camunda/Bizagi) e matriz SIPOC (Suppliers, Inputs, Process, Outputs, Customers).",
      "Aplicação das 7 Ferramentas da Qualidade: Construção de Diagrama de Causa e Efeito (Ishikawa / 6M), Gráfico de Pareto (priorização 80/20 das causas de divergência), Histograma, Estratificação por turno/categoria e Diagrama de Dispersão.",
      "Controle Estatístico de Processos (CEP): Monitoramento da estabilidade do processo com limites de controle superior e inferior (LSC / LIC) e plano de ação corretiva."
    ],
    results: [
      "Identificação das causas-raiz críticas responsáveis pela maior parte das divergências de inventário.",
      "Padronização de Procedimentos Operacionais Padrão (POP) e pontos de verificação no recebimento e expedição."
    ],
    tools: ["BPMN (Modelagem de Processos)", "Matriz SIPOC", "Controle Estatístico de Processos (CEP)", "Gráfico de Pareto & Ishikawa", "Gestão de Estoques", "Melhoria Contínua"]
  },

  "valuation-raizen-b3": {
    badge: "Valuation, WACC, EVA & Estrutura de Capital",
    date: "2026 • UFJF (FIN008)",
    title: "Análise de Estrutura de Capital, WACC, EVA e Alavancagem — Raízen (RAIZ4), Alupar (ALUP11) e Varejo",
    client: "Administração Financeira e Orçamentária II (FIN008 — UFJF)",
    problem: "Analisar como decisões de financiamento (emissão de ações em IPO vs. emissão de dívida internacional / Notes de longo prazo), custo de capital e alavancagem impactam a geração ou destruição de valor econômico aos acionistas.",
    solution: [
      "Estudo de Caso Raízen S.A. (RAIZ4): Análise documental do Prospecto Definitivo de IPO (2021), Demonstrações Financeiras (ITRs 2024/2025) e emissões de Green Notes (2034/2037/2054) para alongamento do prazo médio da dívida.",
      "Cálculo de Métricas de Valor e Risco: Apuração de Custo Médio Ponderado de Capital (WACC), Retorno sobre o Capital Investido (ROIC), Economic Value Added (EVA / VEA), Grau de Alavancagem Operacional (GAO), Financeira (GAF) e Combinada (GAC) em estudos comparativos envolvendo Alupar (ALUP11), Grupo Mateus (GMAT3), GPA (PCAR3) e Azul (AZUL4)."
    ],
    results: [
      "Diagnóstico técnico completo sobre o trade-off entre benefício fiscal da dívida e risco de insolvência em cenários de taxa Selic elevada.",
      "Avaliação fundamentada da criação de valor (ROIC vs. WACC) em setores intensivos em capital."
    ],
    tools: ["WACC & ROIC", "Economic Value Added (EVA)", "Alavancagem Operacional e Financeira", "Análise de ITR / DFP / Prospecto IPO", "Finanças Corporativas"]
  },

  "reciclarte-sustentabilidade": {
    badge: "Gestão de Projetos, Orçamento & Viabilidade",
    date: "2024 – 2025 • Fundação Renova / SENAC",
    title: "Captação e Gestão do Projeto Socioambiental Reciclarte (R$ 40,8 mil) & Viabilidade Fotovoltaica",
    client: "Programa Pulsar Jovem pelo Rio Doce (FGPA / Fundação Renova) & SENAC",
    problem: "Estruturar, orçar, aprovar em edital competitivo e executar projetos de impacto socioambiental e eficiência energética com rigor orçamentário e prestação de contas.",
    solution: [
      "Projeto Reciclarte (Pulsar Jovem / Fundação Renova): Coautoria e execução de projeto aprovado com orçamento de R$ 40.799,99 no Bairro Turmalina (Governador Valadares/MG), articulando parcerias com Instituto Nosso Lar, EE Cecília Meireles, CIAAT e ASCANAVI para oficinas de reciclagem, economia circular e feira comunitária.",
      "Projeto Senac Sustentável (Viabilidade Fotovoltaica): Dimensionamento técnico-financeiro de usina solar de 70,4 kWp (128 painéis de 550W, investimento de R$ 270.000,00) com prototipagem 3D e análise de retorno.",
      "Plano de Negócios Startup Sollutech (SENAI): Monografia de 44 páginas com pesquisa de mercado (N=147), DRE e fluxo de caixa para sistema de automação e backup de energia."
    ],
    results: [
      "Execução integral e aprovação da prestação de contas de R$ 40.799,99 no Projeto Reciclarte.",
      "Comprovação de Payback de 3 anos e economia projetada de R$ 7,52 milhões em 25 anos no projeto fotovoltaico do SENAC, e Payback de 8 meses (rentabilidade de 118% a.a.) no projeto Sollutech."
    ],
    tools: ["Gestão de Projetos (PMBOK/Canvas)", "Gestão Orçamentária e Prestação de Contas", "Viabilidade Econômica", "ESG & Economia Circular", "Liderança Comunitária"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle (Dark / Light)
  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("jc_portfolio_theme") || "dark";
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (themeBtn) themeBtn.textContent = "🌙";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      if (current === "light") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("jc_portfolio_theme", "dark");
        themeBtn.textContent = "☀️";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("jc_portfolio_theme", "light");
        themeBtn.textContent = "🌙";
      }
    });
  }

  // 2. Project Category Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. Case Study Modal Logic
  const modal = document.getElementById("caseModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  document.querySelectorAll("[data-case]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const caseId = btn.getAttribute("data-case");
      const data = CASE_STUDIES[caseId];
      if (!data || !modal || !modalBody) return;

      const solutionsHtml = data.solution.map((item) => `<li>${item}</li>`).join("");
      const resultsHtml = data.results.map((item) => `<li><strong>${item}</strong></li>`).join("");
      const toolsHtml = data.tools.map((t) => `<span class="tag">${t}</span>`).join("");

      modalBody.innerHTML = `
        <div style="margin-bottom: 12px;">
          <span class="project-badge badge-ia">${data.badge}</span>
          <span class="project-date" style="margin-left: 10px;">${data.date}</span>
        </div>
        <h2 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 6px;">${data.title}</h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 18px;">Contexto / Organização: <strong>${data.client}</strong></p>

        <div class="modal-section">
          <h4>1. Desafio & Problema de Negócio</h4>
          <p>${data.problem}</p>
        </div>

        <div class="modal-section">
          <h4>2. Solução Técnica & Metodologia Executada</h4>
          <ul>${solutionsHtml}</ul>
        </div>

        <div class="modal-section">
          <h4>3. Resultados & Impacto Mensurável</h4>
          <ul>${resultsHtml}</ul>
        </div>

        <div class="modal-section">
          <h4>4. Tecnologias, Ferramentas & Competências Aplicadas</h4>
          <div class="skill-tags" style="margin-top: 8px;">${toolsHtml}</div>
        </div>
      `;

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

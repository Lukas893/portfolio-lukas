export type ImplementationStatus =
  | "IMPLEMENTADO"
  | "PLANEJADO"
  | "NAO_VERIFICADO";

export interface DiagramNodeData {
  id: string;
  label: string;
  shortType: string;
  x: number;
  y: number;
  width: number;
  height: number;
  responsibility: string;
  type: string;
  fields?: string[];
  relations: string[];
  status: ImplementationStatus;
  accent: "cyan" | "orange" | "emerald" | "neutral";
}

export interface DiagramEdgeData {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectDiagramData {
  title: string;
  subtitle: string;
  note?: string;
  nodes: DiagramNodeData[];
  edges: DiagramEdgeData[];
}

export interface SecurityItem {
  title: string;
  detail: string;
}

export interface ProjectData {
  id: string;
  code: string;
  title: string;
  category: string;
  statusLabel: string;
  isExperimental?: boolean;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  stackGroups: {
    group: string;
    items: string[];
  }[];
  businessView: {
    sections: {
      code: string;
      title: string;
      content: string;
    }[];
    deliverablesTitle: string;
    deliverables: string[];
    disclaimer?: string;
  };
  engineeringView: {
    architectureSummary: string;
    architectureLayers: {
      layer: string;
      responsibility: string;
      status: ImplementationStatus;
    }[];
    architectureDiagram: ProjectDiagramData;
    databaseDiagram: {
      hasConfirmedDatabase: boolean;
      summary: string;
      diagram?: ProjectDiagramData;
    };
    security: {
      implemented: SecurityItem[];
      planned: SecurityItem[];
      unverified: SecurityItem[];
      disclaimer: string;
    };
    evolution: {
      summary: string;
      decisions: string[];
    };
  };
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "floyd-barbershop",
    code: "01",
    title: "FLOYD BARBERSHOP",
    category: "SISTEMA DE AGENDAMENTO E AUTOMAÇÃO COMERCIAL",
    statusLabel: "PROJETO IMPLEMENTADO",
    description:
      "Aplicação web Full-Stack voltada à organização de agendamentos, gestão administrativa e automação de rotinas comerciais de barbearia, construída com Node.js, Express e MongoDB Atlas.",
    liveUrl: "https://floyd-barbershop.onrender.com",
    repoUrl: "https://github.com/Lukas893/floyd-barbershop",
    stackGroups: [
      {
        group: "Backend & Dados",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB Atlas",
          "Mongoose",
          "node-cron",
          "express-rate-limit",
          "Compressão Gzip",
        ],
      },
      {
        group: "Frontend & Integrações",
        items: [
          "JavaScript",
          "PWA",
          "Service Workers",
          "WhatsApp Web API (Baileys)",
          "Chart.js",
        ],
      },
      {
        group: "Infraestrutura",
        items: ["Render", "UptimeRobot"],
      },
    ],
    businessView: {
      sections: [
        {
          code: "01 · PROBLEMA",
          title: "Desorganização no agendamento manual",
          content:
            "A gestão de horários feita manualmente por mensagens dificulta o controle da grade, aumenta o risco de conflitos entre atendimentos e exige esforço repetitivo para lembrar clientes e acompanhar quem parou de frequentar.",
        },
        {
          code: "02 · SOLUÇÃO",
          title: "Agendamento estruturado e rotinas automáticas",
          content:
            "O sistema centraliza a marcação de horários em uma aplicação web acessível pelo celular, aplica regras de negócio automaticamente na hora do agendamento e executa envios programados pelo WhatsApp.",
        },
        {
          code: "03 · EXPERIÊNCIA DO CLIENTE",
          title: "Acesso rápido pelo navegador ou PWA",
          content:
            "Interface responsiva com suporte a PWA (Service Workers), visualização de horários livres em blocos contínuos de 30 minutos e cancelamento em um clique com liberação imediata da vaga na grade.",
        },
        {
          code: "04 · EXPERIÊNCIA ADMINISTRATIVA",
          title: "Controle operacional e leitura financeira",
          content:
            "Painel administrativo dedicado para acompanhar agendamentos, histórico de serviços e clientes, além de visualização de indicadores operacionais com gráficos gerados via Chart.js.",
        },
      ],
      deliverablesTitle: "Funcionalidades e regras de negócio informadas",
      deliverables: [
        "Arquitetura MVC com índices compostos no MongoDB Atlas para consultas frequentes",
        "Algoritmo de alocação de horários em blocos contíguos de 30 minutos, sem sobreposição",
        "Aplicação automática de taxa de 20% em agendamentos de domingos e feriados",
        "Lembretes preventivos enviados automaticamente pelo WhatsApp",
        "Link de cancelamento em um clique com liberação imediata da grade de horários",
        "Rotina periódica para reativação de clientes inativos há mais de 25 dias",
      ],
    },
    engineeringView: {
      architectureSummary:
        "API RESTful em Node.js e Express estruturada no padrão MVC, conectada ao MongoDB Atlas via Mongoose, com rotinas agendadas (node-cron) integradas à WhatsApp Web API (Baileys) e frontend PWA servido com compressão Gzip.",
      architectureLayers: [
        {
          layer: "Frontend PWA (HTML5 / CSS3 / JS / Chart.js)",
          responsibility:
            "Interface móvel com Service Workers para agendamento do cliente e painel administrativo com gráficos.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Backend RESTful MVC (Node.js / Express.js)",
          responsibility:
            "Rotas, controladores e regras de negócio (alocação em blocos de 30 min e tarifa de 20% em domingos/feriados).",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Automação & Agendamento (node-cron / Baileys)",
          responsibility:
            "Execução periódica de lembretes preventivos, cancelamento com liberação de grade e reativação (+25 dias).",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Persistência & Deploy (MongoDB Atlas / Render / UptimeRobot)",
          responsibility:
            "Armazenamento de dados com índices compostos via Mongoose, publicação no Render e checagem externa.",
          status: "IMPLEMENTADO",
        },
      ],
      architectureDiagram: {
        title: "Fluxo de Arquitetura — Floyd Barbershop",
        subtitle:
          "Selecione um nó no diagrama (clique ou teclado) para inspecionar responsabilidades e conexões.",
        note: "Baseado nas informações oficiais do projeto; o código-fonte do repositório local não foi inspecionado diretamente nesta sessão.",
        nodes: [
          {
            id: "pwa-client",
            label: "Frontend PWA",
            shortType: "CLIENTE / ADMIN",
            x: 30,
            y: 120,
            width: 160,
            height: 76,
            type: "Interface Web (PWA + Service Workers + Chart.js)",
            responsibility:
              "Fluxo de agendamento para clientes, link de cancelamento em 1 clique e painel administrativo com gráficos.",
            relations: ["api-mvc"],
            status: "IMPLEMENTADO",
            accent: "cyan",
          },
          {
            id: "api-mvc",
            label: "API REST (MVC)",
            shortType: "NODE.JS / EXPRESS",
            x: 270,
            y: 120,
            width: 185,
            height: 76,
            type: "Backend & Regras de Negócio",
            responsibility:
              "Orquestra rotas, compressão Gzip, express-rate-limit, alocação contígua de 30 min e taxa de 20% em domingos/feriados.",
            relations: ["pwa-client", "mongodb", "cron-whatsapp"],
            status: "IMPLEMENTADO",
            accent: "orange",
          },
          {
            id: "mongodb",
            label: "MongoDB Atlas",
            shortType: "MONGOOSE / ÍNDICES",
            x: 545,
            y: 35,
            width: 185,
            height: 76,
            type: "Banco de Dados NoSQL",
            responsibility:
              "Persistência de agendamentos, histórico de serviços e clientes com índices compostos para consultas frequentes.",
            relations: ["api-mvc", "cron-whatsapp"],
            status: "IMPLEMENTADO",
            accent: "emerald",
          },
          {
            id: "cron-whatsapp",
            label: "Cron + WhatsApp",
            shortType: "NODE-CRON / BAILEYS",
            x: 545,
            y: 205,
            width: 185,
            height: 76,
            type: "Serviço de Automação",
            responsibility:
              "Rotinas agendadas para lembretes preventivos e reativação periódica de clientes inativos (+25 dias).",
            relations: ["api-mvc", "mongodb"],
            status: "IMPLEMENTADO",
            accent: "cyan",
          },
        ],
        edges: [
          { from: "pwa-client", to: "api-mvc", label: "HTTP / JSON" },
          { from: "api-mvc", to: "mongodb", label: "Mongoose ODM" },
          { from: "api-mvc", to: "cron-whatsapp", label: "Triggers / Jobs" },
          { from: "cron-whatsapp", to: "mongodb", label: "Leitura de Grade" },
        ],
      },
      databaseDiagram: {
        hasConfirmedDatabase: true,
        summary:
          "O projeto utiliza MongoDB Atlas com Mongoose e índices compostos confirmados para acelerar consultas de histórico de serviços e clientes. Como os arquivos de schema do repositório não foram lidos diretamente nesta sessão, o diagrama abaixo representa o modelo conceitual derivado das regras confirmadas, sinalizando o nível de verificação de cada bloco.",
        diagram: {
          title: "Visão de Dados & Índices — MongoDB Atlas",
          subtitle:
            "Entidades conceituais alinhadas às funcionalidades informadas (schemas detalhados marcados para verificação direta no repositório).",
          nodes: [
            {
              id: "db-clientes",
              label: "Clientes",
              shortType: "COLEÇÃO · CONFIRMADA",
              x: 35,
              y: 120,
              width: 195,
              height: 82,
              type: "Coleção MongoDB (Conceitual)",
              responsibility:
                "Armazena identificação, contato para WhatsApp e histórico de atendimentos usado pela rotina de reativação (+25 dias).",
              fields: [
                "Referência de histórico de serviços",
                "Contato para notificações WhatsApp",
                "Campos exatos do schema: não inspecionados diretamente",
              ],
              relations: ["db-agendamentos"],
              status: "IMPLEMENTADO",
              accent: "cyan",
            },
            {
              id: "db-agendamentos",
              label: "Agendamentos",
              shortType: "ÍNDICE COMPOSTO",
              x: 285,
              y: 120,
              width: 210,
              height: 82,
              type: "Coleção Principal (Índice Composto)",
              responsibility:
                "Controla alocação em blocos contíguos de 30 minutos sem sobreposição, aplicação da taxa de 20% em domingos/feriados e estado de cancelamento.",
              fields: [
                "Blocos contíguos de 30 min",
                "Regra de taxa de 20% (domingos/feriados)",
                "Índices compostos para consultas de grade/histórico",
              ],
              relations: ["db-clientes", "db-servicos"],
              status: "IMPLEMENTADO",
              accent: "orange",
            },
            {
              id: "db-servicos",
              label: "Serviços & Admin",
              shortType: "SCHEMA NÃO INSPECIONADO",
              x: 550,
              y: 120,
              width: 180,
              height: 82,
              type: "Entidades de Apoio (Verificação Pendente)",
              responsibility:
                "Catálogo de serviços e credenciais administrativas citadas na arquitetura; estrutura exata dos documentos requer leitura do repositório.",
              fields: [
                "Referenciado no histórico de serviços",
                "Estrutura exata de campos: NÃO VERIFICADO",
              ],
              relations: ["db-agendamentos"],
              status: "NAO_VERIFICADO",
              accent: "neutral",
            },
          ],
          edges: [
            { from: "db-clientes", to: "db-agendamentos", label: "1 : N" },
            { from: "db-agendamentos", to: "db-servicos", label: "Ref. Serviço" },
          ],
        },
      },
      security: {
        implemented: [
          {
            title: "Limitação de requisições (express-rate-limit)",
            detail:
              "Pacote informado na stack backend para controle de taxa de requisições na API.",
          },
          {
            title: "Separação de ambiente de produção (Render / Atlas)",
            detail:
              "Persistência externa no MongoDB Atlas e hospedagem isolada em PaaS (Render).",
          },
        ],
        planned: [
          {
            title: "Revisão periódica de auditoria e logs",
            detail:
              "Ampliação de rastreabilidade operacional e endurecimento contínuo de endpoints administrativos.",
          },
        ],
        unverified: [
          {
            title: "Cobertura exata de rate limiting e validação por rota",
            detail:
              "A presença do pacote não comprova proteção em todas as rotas; validação linha a linha não foi realizada sem acesso ao repositório local.",
          },
          {
            title: "Mecanismos de autenticação, autorização e gestão de secrets",
            detail:
              "Não verificados diretamente no código-fonte nesta sessão.",
          },
        ],
        disclaimer:
          "Nenhum sistema é tratado como invulnerável. A classificação acima separa estritamente o que foi informado do que exige inspeção direta de código.",
      },
      evolution: {
        summary:
          "Projeto desenvolvido de forma iterativa para resolver uma demanda real de agendamento e atendimento, versionado em Git/GitHub e publicado em ambiente real no Render.",
        decisions: [
          "Adoção da arquitetura MVC no Express para separar regras de negócio de alocação de horários da camada de rotas.",
          "Uso de índices compostos no MongoDB Atlas para evitar degradação em consultas recorrentes de histórico.",
          "Escolha de PWA com Service Workers para entregar acesso rápido no celular sem depender de lojas de aplicativos.",
          "Uso de compressão Gzip no servidor e monitoramento externo com UptimeRobot para suporte operacional no plano PaaS.",
        ],
      },
    },
  },
 {
    id: "jarvis-ai",
    code: "02",
    title: "JARVIS",
    category: "ARQUITETURA V2.0",
    statusLabel: "ARQUITETURA V2.0 | EM OPERAÇÃO LOCAL",
    isExperimental: false,
    description:
      "Agente pessoal autônomo em operação local com orquestração multi-agente (281 agentes em 10 esquadrões), memória persistente em 5 camadas com SQLite FTS5, governança de permissões e interface Cockpit em tempo real.",
    stackGroups: [
      {
        group: "Core & Runtime",
        items: ["Node.js", "Python", "WebSockets", "Pytest"],
      },
      {
        group: "IA, Dados & Automação",
        items: ["SQLite FTS5", "Multi-LLM", "MCP/ADB"],
      },
    ],
    businessView: {
      sections: [
        {
          code: "01 · OBJETIVO",
          title: "Assistente pessoal autônomo com governança",
          content:
            "Orquestrar 281 agentes especializados em 10 esquadrões para executar tarefas complexas de engenharia, automação e análise com memória contínua e controle explícito de permissões.",
        },
        {
          code: "02 · ARQUITETURA",
          title: "CognitiveEngine de 10 etapas e Cockpit em tempo real",
          content:
            "Arquitetura modular desacoplada que separa interface Cockpit via WebSockets, núcleo cognitivo, roteamento multi-provedor de LLMs e execução segura de ferramentas locais e mobile.",
        },
        {
          code: "03 · MEMÓRIA & RESILIÊNCIA",
          title: "5 camadas persistentes e roteamento resiliente",
          content:
            "Persistência em SQLite FTS5 com árvore hierárquica jarvis:// e detecção de contradições, combinada a ModelRouter com Circuit Breaker de 3 estados e avaliação paralela.",
        },
        {
          code: "04 · OPERAÇÃO",
          title: "Validação contínua e autoevolução segura",
          content:
            "Sistema validado em operação local com suíte Pytest, sandbox de autoevolução com Quality Gate (<= 350 linhas/módulo), rollback automático e trilha de auditoria imutável.",
        },
      ],
      deliverablesTitle: "Capacidades implementadas na Versão 2.0",
      deliverables: [
        "CognitiveEngine de 10 etapas orquestrando 281 agentes em 10 esquadrões",
        "Memória persistente em 5 camadas com SQLite FTS5 e árvore jarvis://",
        "ModelRouter multi-LLM (Gemini, OpenRouter, Ollama) com Circuit Breaker",
        "Governança de permissões (Níveis 0 a 4) com fila ACTION assíncrona",
        "Auditoria imutável SHA-256 (hash-chain) e ponte mobile Android (MCP/ADB)",
      ],
      disclaimer:
        "Sistema pessoal em operação local (Arquitetura v2.0), com suíte de testes automatizados em Pytest e auditoria criptográfica ativa.",
    },
    engineeringView: {
      architectureSummary:
        "Arquitetura v2.0 em Node.js e Python combinando CognitiveEngine de 10 etapas, orquestração de 281 agentes em 10 esquadrões, memória SQLite FTS5, ModelRouter resiliente e governança rigorosa de execução.",
      architectureLayers: [
        {
          layer: "Núcleo de Orquestração (Node.js / Python)",
          responsibility:
            "CognitiveEngine de 10 etapas + orquestração de 281 agentes em 10 esquadrões com escopo estrito de ferramentas.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Camada de Memória Contextual",
          responsibility:
            "Memória persistente em 5 camadas (trabalho, episódica, semântica, projetos e preferências) com SQLite FTS5 e árvore hierárquica jarvis://.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Conectores de Modelos & APIs",
          responsibility:
            "ModelRouter multi-provedor (Gemini, OpenRouter, Ollama) com Circuit Breaker de 3 estados, AutoTune e corrida paralela com avaliação 0–100.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Execução Segura de Automação",
          responsibility:
            "ToolManager centralizado, sandbox de autoevolução com Quality Gate (<= 350 linhas/módulo), rollback automático e ponte mobile Android (ADB/MCP).",
          status: "IMPLEMENTADO",
        },
      ],
      architectureDiagram: {
        title: "Mapa de Módulos – JARVIS v2.0",
        subtitle:
          "Selecione um módulo para inspecionar seu papel na arquitetura em operação local.",
        note: "Todos os módulos centrais da Arquitetura v2.0 estão implementados e validados em operação local com testes Pytest.",
        nodes: [
          {
            id: "j-entrada",
            label: "Cockpit / WebSockets",
            shortType: "TEMPO REAL",
            x: 30,
            y: 120,
            width: 165,
            height: 76,
            type: "Interface Cockpit",
            responsibility:
              "Interface em tempo real via WebSockets para envio de comandos, fila ACTION (Approve | Edit | Reject) e telemetria dos esquadrões.",
            relations: ["j-orquestrador"],
            status: "IMPLEMENTADO",
            accent: "cyan",
          },
          {
            id: "j-orquestrador",
            label: "CognitiveEngine",
            shortType: "281 AGENTES",
            x: 265,
            y: 120,
            width: 185,
            height: 76,
            type: "Núcleo de Orquestração",
            responsibility:
              "Pipeline cognitivo de 10 etapas que coordena 281 agentes em 10 esquadrões com escopo estrito de ferramentas.",
            relations: ["j-entrada", "j-modelos", "j-contexto"],
            status: "IMPLEMENTADO",
            accent: "orange",
          },
          {
            id: "j-modelos",
            label: "ModelRouter",
            shortType: "MULTI-LLM",
            x: 535,
            y: 35,
            width: 190,
            height: 76,
            type: "Conectores & Resiliência",
            responsibility:
              "Roteamento entre Gemini, OpenRouter e Ollama com Circuit Breaker de 3 estados, AutoTune e corrida paralela (nota 0–100).",
            relations: ["j-orquestrador"],
            status: "IMPLEMENTADO",
            accent: "emerald",
          },
          {
            id: "j-contexto",
            label: "Memória & Automação",
            shortType: "SQLITE / MCP",
            x: 535,
            y: 205,
            width: 190,
            height: 76,
            type: "Persistência & Sandbox",
            responsibility:
              "Memória em 5 camadas (SQLite FTS5 + jarvis://), ToolManager, sandbox com Quality Gate (<= 350 linhas) e ponte Android ADB/MCP.",
            relations: ["j-orquestrador"],
            status: "IMPLEMENTADO",
            accent: "cyan",
          },
        ],
        edges: [
          { from: "j-entrada", to: "j-orquestrador", label: "Comandos / ACTION" },
          { from: "j-orquestrador", to: "j-modelos", label: "Circuit Breaker" },
          { from: "j-orquestrador", to: "j-contexto", label: "FTS5 / Tools" },
        ],
      },
      databaseDiagram: {
        hasConfirmedDatabase: true,
        summary:
          "Persistência local estruturada em duas bases SQLite independentes: jarvis_memory.db (SQLite + FTS5 para memória em 5 camadas e grafo semântico) e jarvis_audit.db (trilha imutável protegida por triggers e hash-chain SHA-256).",
        diagram: {
          title: "Persistência Local – Bases SQLite do JARVIS v2.0",
          subtitle:
            "Selecione um banco ou tabela para inspecionar a estrutura de memória FTS5 e auditoria imutável.",
          note: "Separação física entre memória cognitiva (jarvis_memory.db) e cofre de auditoria imutável (vault/jarvis_audit.db).",
          nodes: [
            {
              id: "db-memory",
              label: "jarvis_memory.db",
              shortType: "SQLITE + FTS5",
              x: 40,
              y: 120,
              width: 185,
              height: 76,
              type: "Base de Memória (5 Camadas)",
              responsibility:
                "Armazena episódios, fatos/nós semânticos, arestas de relacionamento, preferências e estado de tarefas com busca FTS5 e árvore jarvis://.",
              relations: ["db-semantic", "db-tasks"],
              status: "IMPLEMENTADO",
              accent: "cyan",
            },
            {
              id: "db-semantic",
              label: "Grafo & Episódios",
              shortType: "FTS5 / NÓS",
              x: 300,
              y: 35,
              width: 190,
              height: 76,
              type: "Tabelas Semânticas",
              responsibility:
                "Tabelas de episódios, fatos/nós semânticos e arestas de relacionamento com detecção automática de contradições.",
              relations: ["db-memory"],
              status: "IMPLEMENTADO",
              accent: "emerald",
            },
            {
              id: "db-tasks",
              label: "Preferências & Tarefas",
              shortType: "ESTADO LOCAL",
              x: 300,
              y: 205,
              width: 190,
              height: 76,
              type: "Estado & Preferências",
              responsibility:
                "Persistência de preferências do usuário, contexto de projetos ativos e estado contínuo de tarefas em execução.",
              relations: ["db-memory", "db-audit"],
              status: "IMPLEMENTADO",
              accent: "orange",
            },
            {
              id: "db-audit",
              label: "jarvis_audit.db",
              shortType: "HASH-CHAIN",
              x: 555,
              y: 120,
              width: 185,
              height: 76,
              type: "Auditoria Imutável",
              responsibility:
                "Trilha de eventos em vault/jarvis_audit.db protegida por triggers SQLite BEFORE UPDATE/DELETE e encadeamento criptográfico SHA-256.",
              relations: ["db-tasks"],
              status: "IMPLEMENTADO",
              accent: "emerald",
            },
          ],
          edges: [
            { from: "db-memory", to: "db-semantic", label: "Índice FTS5" },
            { from: "db-memory", to: "db-tasks", label: "jarvis://" },
            { from: "db-tasks", to: "db-audit", label: "SHA-256 Chain" },
          ],
        },
      },
      security: {
        implemented: [
          {
            title: "PermissionManager (Níveis 0 a 4)",
            detail:
              "Governança granular de permissões com fila assíncrona ACTION (Approve | Edit | Reject) para ações sensíveis.",
          },
          {
            title: "Auditoria Imutável (vault/jarvis_audit.db)",
            detail:
              "Trilha de auditoria protegida por triggers SQLite BEFORE UPDATE/DELETE e encadeamento criptográfico SHA-256 (hash-chain).",
          },
          {
            title: "PromptInjectionGuard & Segredos",
            detail:
              "Proteção contra Prompt Injection, isolamento de segredos em .env e higienização de histórico Git.",
          },
          {
            title: "Ponte Mobile Autenticada (ADB/MCP)",
            detail:
              "Autenticação por PIN com verificação HMAC e allowlist contra Path Traversal na transferência de arquivos.",
          },
        ],
        planned: [
          {
            title: "Containerização Docker completa",
            detail:
              "Empacotamento isolado de serviços e dependências para padronizar a execução entre ambientes.",
          },
          {
            title: "Criptografia em repouso dos bancos locais",
            detail:
              "Camada de criptografia transparente para os arquivos SQLite locais (jarvis_memory.db e jarvis_audit.db).",
          },
        ],
        unverified: [],
        disclaimer:
          "Controles de governança, auditoria criptográfica e proteção contra injeção de prompt ativos e validados em operação local na Arquitetura v2.0.",
      },
      evolution: {
        summary:
          "Arquitetura v2.0 consolidada em operação local, combinando Node.js, Python, SQLite FTS5 e automação segura com evolução guiada por Quality Gate.",
        decisions: [
          "Separação entre memória cognitiva (jarvis_memory.db) e auditoria imutável (jarvis_audit.db) para integridade criptográfica.",
          "Uso de ModelRouter com Circuit Breaker de 3 estados e corrida paralela para evitar dependência de um único provedor de LLM.",
          "Sandbox de autoevolução com limite de 350 linhas por módulo e rollback automático para manter a base sustentável.",
        ],
      },
    },
  },
];
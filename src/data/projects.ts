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
    category: "ASSISTENTE PESSOAL INTELIGENTE",
    statusLabel: "PROJETO EXPERIMENTAL | EM DESENVOLVIMENTO",
    isExperimental: true,
    description:
      "Um projeto experimental de assistente pessoal inteligente, desenvolvido para explorar orquestração de agentes, memória contextual, automação de tarefas e integração com diferentes modelos de inteligência artificial.",
    stackGroups: [
      {
        group: "Linguagens & Runtime",
        items: ["Node.js", "Python"],
      },
      {
        group: "Conceitos Explorados",
        items: [
          "Arquitetura Modular",
          "Orquestração de Agentes",
          "Memória Contextual",
          "Automação de Tarefas",
          "Integração com Modelos e APIs",
        ],
      },
    ],
    businessView: {
      sections: [
        {
          code: "01 · OBJETIVO",
          title: "Explorar um assistente pessoal extensível",
          content:
            "Investigar na prática como estruturar um assistente capaz de combinar diferentes capacidades de inteligência artificial em um fluxo coeso, indo além de respostas isoladas.",
        },
        {
          code: "02 · ARQUITETURA",
          title: "Estrutura modular em evolução",
          content:
            "Os componentes são pensados de forma separada — entrada de comandos, coordenação, contexto e conectores externos — para permitir testar novas integrações sem reescrever o núcleo inteiro.",
        },
        {
          code: "03 · CAPACIDADES EM DESENVOLVIMENTO",
          title: "Orquestração, contexto e automação",
          content:
            "O projeto experimenta coordenação entre agentes, retenção de contexto entre interações e acionamento de rotinas automatizadas, em estágio contínuo de validação técnica.",
        },
        {
          code: "04 · EVOLUÇÃO",
          title: "Laboratório prático de engenharia",
          content:
            "Por ser um projeto experimental e em desenvolvimento ativo, o foco atual está na consolidação da arquitetura, na confiabilidade das integrações e no aprendizado técnico aplicado.",
        },
      ],
      deliverablesTitle: "Frentes técnicas exploradas no projeto",
      deliverables: [
        "Arquitetura modular desacoplada entre núcleo e integrações",
        "Experimentos de orquestração de agentes para divisão de tarefas",
        "Estudo e implementação incremental de memória contextual",
        "Automação de tarefas acionadas por fluxos de comando",
        "Integração com diferentes modelos de IA e APIs usando Node.js e Python",
      ],
      disclaimer:
        "Projeto experimental em desenvolvimento contínuo. Não é apresentado como produto comercial finalizado nem possui link público confirmado.",
    },
    engineeringView: {
      architectureSummary:
        "Arquitetura modular experimental construída com Node.js e Python para estudar o desacoplamento entre interface de interação, orquestração de agentes, contexto e chamadas a modelos de IA.",
      architectureLayers: [
        {
          layer: "Núcleo de Orquestração (Node.js / Python)",
          responsibility:
            "Coordenação experimental de fluxo entre comandos, agentes especializados e ferramentas.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Camada de Memória Contextual",
          responsibility:
            "Manutenção de contexto entre interações para orientar decisões do assistente.",
          status: "PLANEJADO",
        },
        {
          layer: "Conectores de Modelos & APIs",
          responsibility:
            "Camada de integração para alternar ou combinar diferentes modelos de inteligência artificial.",
          status: "IMPLEMENTADO",
        },
        {
          layer: "Execução Segura de Automação",
          responsibility:
            "Controles de confirmação e isolamento de ações executadas pelo assistente.",
          status: "NAO_VERIFICADO",
        },
      ],
      architectureDiagram: {
        title: "Mapa de Módulos — JARVIS (Experimental)",
        subtitle:
          "Selecione um módulo para visualizar seu papel e estado atual de implementação/verificação.",
        note: "O repositório local do JARVIS não foi inspecionado nesta sessão; o diagrama reflete apenas os módulos conceituais informados, diferenciando estados.",
        nodes: [
          {
            id: "j-entrada",
            label: "Interface / Entrada",
            shortType: "COMANDO",
            x: 30,
            y: 120,
            width: 155,
            height: 76,
            type: "Camada de Interação",
            responsibility:
              "Recebe solicitações do usuário e exibe retornos produzidos pelo núcleo do assistente.",
            relations: ["j-orquestrador"],
            status: "IMPLEMENTADO",
            accent: "cyan",
          },
          {
            id: "j-orquestrador",
            label: "Orquestrador",
            shortType: "NODE.JS / PYTHON",
            x: 265,
            y: 120,
            width: 185,
            height: 76,
            type: "Núcleo Modular",
            responsibility:
              "Coordena a comunicação entre agentes, contexto e chamadas de automação ou modelos externos.",
            relations: ["j-entrada", "j-modelos", "j-contexto"],
            status: "IMPLEMENTADO",
            accent: "orange",
          },
          {
            id: "j-modelos",
            label: "Modelos & APIs",
            shortType: "INTEGRAÇÃO IA",
            x: 535,
            y: 35,
            width: 190,
            height: 76,
            type: "Conectores Externos",
            responsibility:
              "Integração com diferentes provedores e modelos de inteligência artificial via API.",
            relations: ["j-orquestrador"],
            status: "IMPLEMENTADO",
            accent: "emerald",
          },
          {
            id: "j-contexto",
            label: "Memória & Tarefas",
            shortType: "EM EVOLUÇÃO",
            x: 535,
            y: 205,
            width: 190,
            height: 76,
            type: "Módulo Experimental",
            responsibility:
              "Persistência de contexto e execução de rotinas automatizadas; detalhes internos de armazenamento não verificados.",
            relations: ["j-orquestrador"],
            status: "NAO_VERIFICADO",
            accent: "neutral",
          },
        ],
        edges: [
          { from: "j-entrada", to: "j-orquestrador", label: "Intenção" },
          { from: "j-orquestrador", to: "j-modelos", label: "Chamadas API" },
          { from: "j-orquestrador", to: "j-contexto", label: "Contexto / Ações" },
        ],
      },
      databaseDiagram: {
        hasConfirmedDatabase: false,
        summary:
          "Não há um banco de dados ou modelo entidade-relacionamento persistente confirmado para o JARVIS a partir das evidências disponíveis. Seguindo as diretrizes de integridade técnica, nenhum DER fictício foi criado para este projeto.",
      },
      security: {
        implemented: [],
        planned: [
          {
            title: "Confirmação explícita para ações automatizadas",
            detail:
              "Previsão de validação antes de executar comandos que alterem arquivos ou enviem dados externos.",
          },
          {
            title: "Gestão isolada de credenciais de APIs",
            detail:
              "Separação de chaves de provedores de IA em variáveis de ambiente fora do versionamento.",
          },
        ],
        unverified: [
          {
            title: "Controles de segurança no código-fonte",
            detail:
              "O repositório local do JARVIS não foi inspecionado; controles de autenticação, sanitização e permissões permanecem não verificados.",
          },
        ],
        disclaimer:
          "Por se tratar de projeto experimental sem auditoria direta do repositório nesta sessão, nenhum mecanismo de segurança é declarado como comprovado.",
      },
      evolution: {
        summary:
          "Projeto conduzido como laboratório de engenharia de software para investigar arquiteturas de assistentes, orquestração e integração entre Node.js e Python.",
        decisions: [
          "Separação modular entre núcleo de orquestração e conectores de modelos para facilitar experimentação com múltiplos provedores.",
          "Combinação de Node.js e Python para aproveitar ecossistemas complementares de APIs web e automação/IA.",
          "Manutenção do projeto como experimento em evolução contínua, evitando promessas de produto finalizado antes da maturação técnica.",
        ],
      },
    },
  },
];
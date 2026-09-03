/* =========================================================================
   TIGA — conteúdo bilíngue e definição da taxonomia
   Taxonomia de Integração da IA Generativa no Audiovisual Não Interativo
   Base empírica: MSL com 60 estudos primários (IEEE Xplore + ACM DL, 2023–2025)
   ========================================================================= */

/* --- Textos de interface ------------------------------------------------ */
const UI = {
  brand:        { pt: 'TIGA',                                  en: 'TIGA' },
  brandFull:    { pt: 'Taxonomia de Integração da IA Generativa no Audiovisual',
                  en: 'Taxonomy for Integrating Generative AI in Audiovisual' },
  skip:         { pt: 'Ir para o conteúdo',                    en: 'Skip to content' },
  navHow:       { pt: 'Como funciona',                         en: 'How it works' },
  navGlossary:  { pt: 'Glossário',                             en: 'Glossary' },
  navAbout:     { pt: 'Sobre',                                 en: 'About' },
  navSections:  { pt: 'Seções',                                en: 'Sections' },
  langPt:       { pt: 'Português (Brasil)',                    en: 'Portuguese (Brazil)' },
  langEn:       { pt: 'Inglês',                                en: 'English' },
  themeToggle:  { pt: 'Alternar modo claro e escuro',          en: 'Toggle light and dark mode' },
  themeDark:    { pt: 'Modo escuro',                           en: 'Dark mode' },
  themeLight:   { pt: 'Modo claro',                            en: 'Light mode' },
  expertOn:     { pt: 'Mostrar termos técnicos',               en: 'Show technical terms' },
  expertHint:   { pt: 'Exibe o nome formal de cada categoria e a subquestão de origem no mapeamento.',
                  en: 'Shows the formal name of each category and its source sub-question in the mapping.' },

  heroEyebrow:  { pt: 'Ficha técnica de uso de IA',            en: 'AI usage spec sheet' },
  heroTitle:    { pt: 'Onde a inteligência artificial entra no seu projeto — e o que isso custa',
                  en: 'Where AI enters your project — and what that costs' },
  heroLead:     { pt: 'Responda a algumas perguntas sobre o seu filme, série, clipe ou peça publicitária. No fim, você recebe uma ficha com o perfil do seu uso de IA, os pontos que exigem atenção e o que fazer sobre cada um. Não é preciso entender nada de programação.',
                  en: 'Answer a few questions about your film, series, music video or ad. At the end you get a spec sheet with the profile of your AI usage, the points that need attention, and what to do about each one.' },
  heroCta:      { pt: 'Classificar meu projeto',               en: 'Classify my project' },
  heroCta2:     { pt: 'Ver um exemplo pronto',                 en: 'See a finished example' },
  heroTime:     { pt: 'Leva cerca de 4 minutos',               en: 'Takes about 4 minutes' },

  sampleLabel:  { pt: 'Exemplo real do corpus',                en: 'Real case from the corpus' },
  sampleNote:   { pt: 'Ficha gerada a partir de um estudo real analisado no mapeamento. Os seus resultados terão este formato.',
                  en: 'Sheet generated from a real study analysed in the mapping. Your results will look like this.' },

  howTitle:     { pt: 'Como funciona',                         en: 'How it works' },
  howLead:      { pt: 'A ferramenta segue o mesmo protocolo de cinco passos da taxonomia. Cada passo pergunta uma coisa de cada vez, na ordem em que uma decisão de produção realmente acontece.',
                  en: 'The tool follows the same five-step protocol as the taxonomy. Each step asks one thing at a time, in the order a production decision actually happens.' },
  whatIsTitle:  { pt: 'O que é uma taxonomia, em uma frase',   en: 'What a taxonomy is, in one sentence' },
  whatIsBody:   { pt: 'É uma ficha técnica padronizada: em vez de descrever o uso de IA com palavras soltas, você preenche sempre os mesmos campos, e aí dá para comparar dois projetos, dois estudos ou duas ferramentas lado a lado.',
                  en: 'It is a standardised spec sheet: instead of describing AI usage in loose words, you always fill in the same fields, which lets you compare two projects, two studies or two tools side by side.' },

  stepOf:       { pt: 'Passo {n} de {total}',                  en: 'Step {n} of {total}' },
  back:         { pt: 'Voltar',                                en: 'Back' },
  next:         { pt: 'Continuar',                             en: 'Continue' },
  seeResult:    { pt: 'Ver meu resultado',                     en: 'See my result' },
  restart:      { pt: 'Começar de novo',                       en: 'Start over' },
  edit:         { pt: 'Rever respostas',                       en: 'Review answers' },
  required:     { pt: 'Escolha uma opção para continuar.',     en: 'Pick one option to continue.' },
  optional:     { pt: 'opcional',                              en: 'optional' },
  multiHint:    { pt: 'Pode marcar mais de uma.',              en: 'You can pick more than one.' },
  singleHint:   { pt: 'Escolha uma.',                          en: 'Pick one.' },
  dontKnowOk:   { pt: 'Não saber também é uma resposta válida e conta no resultado.',
                  en: '“I don’t know” is a valid answer and counts in the result.' },
  corpusChip:   { pt: '{n} de 60 estudos',                     en: '{n} of 60 studies' },
  corpusChipT:  { pt: 'Frequência desta resposta entre os 60 estudos primários do mapeamento.',
                  en: 'Frequency of this answer across the 60 primary studies in the mapping.' },
  sqLabel:      { pt: 'Origem',                                en: 'Source' },
  formalLabel:  { pt: 'Termo na taxonomia',                    en: 'Term in the taxonomy' },
  progress:     { pt: 'Progresso do formulário',               en: 'Form progress' },

  projectName:  { pt: 'Nome do projeto ou da ferramenta',      en: 'Project or tool name' },
  projectPh:    { pt: 'Ex.: curta “Maré Alta”, piloto da série, campanha de verão',
                  en: 'e.g. “High Tide” short film, series pilot, summer campaign' },
  otherPh:      { pt: 'Qual?',                                 en: 'Which one?' },

  resultEyebrow:{ pt: 'Ficha de integração',                   en: 'Integration sheet' },
  resultTitle:  { pt: 'Perfil do seu uso de IA',               en: 'Your AI usage profile' },
  costLabel:    { pt: 'Custo sociotécnico',                    en: 'Sociotechnical cost' },
  costOf:       { pt: 'de 100',                                en: 'out of 100' },
  costCaveat:   { pt: 'Isto não avalia a qualidade artística nem técnica do seu projeto. Mede o quanto ele exige de cuidado com autoria, trabalho das pessoas, transparência e sinalização ao público.',
                  en: 'This does not judge your project’s artistic or technical quality. It measures how much care it demands around authorship, people’s work, transparency and disclosure to the audience.' },
  gaugeAutonomy:{ pt: 'Autonomia da máquina',                  en: 'Machine autonomy' },
  gaugeTech:    { pt: 'Exigência técnica',                     en: 'Technical demand' },
  gaugeSocial:  { pt: 'Custo sociotécnico',                    en: 'Sociotechnical cost' },
  gaugeAutoHelp:{ pt: 'Quanto da decisão criativa foi entregue à ferramenta.',
                  en: 'How much of the creative decision was handed to the tool.' },
  gaugeTechHelp:{ pt: 'Quanto o seu arranjo exige de infraestrutura e enfrenta gargalos conhecidos.',
                  en: 'How much your setup demands in infrastructure and runs into known bottlenecks.' },
  gaugeSocHelp: { pt: 'Quanto de exposição em autoria, trabalho, reprodutibilidade e sinalização.',
                  en: 'How much exposure in authorship, labour, reproducibility and disclosure.' },

  verdictTitle: { pt: 'Veredito por tópico',                   en: 'Verdict by topic' },
  verdictLead:  { pt: 'Cada tópico abaixo foi avaliado a partir das suas respostas. A cor indica o nível de atenção, e o texto em cinza diz o que fazer a respeito.',
                  en: 'Each topic below was assessed from your answers. The colour shows the attention level, and the grey text says what to do about it.' },
  actionLabel:  { pt: 'O que fazer',                           en: 'What to do' },
  recTitle:     { pt: 'Recomendações para este perfil',        en: 'Recommendations for this profile' },
  recEmpty:     { pt: 'Nenhum alerta adicional para este perfil. Os tópicos acima já cobrem os pontos de atenção.',
                  en: 'No additional alerts for this profile. The topics above already cover the attention points.' },
  mapTitle:     { pt: 'Onde você está no mapa',                en: 'Where you sit on the map' },
  mapLead:      { pt: 'O eixo horizontal é a autonomia entregue à máquina; o vertical, o custo sociotécnico. Os três pontos cinza são estudos reais do mapeamento, para você comparar.',
                  en: 'The horizontal axis is the autonomy handed to the machine; the vertical one, the sociotechnical cost. The three grey points are real studies from the mapping, for comparison.' },
  mapYou:       { pt: 'Você',                                  en: 'You' },
  mapAxisX:     { pt: 'Autonomia da máquina',                  en: 'Machine autonomy' },
  mapAxisY:     { pt: 'Custo sociotécnico',                    en: 'Sociotechnical cost' },
  mapLow:       { pt: 'baixa',                                 en: 'low' },
  mapHigh:      { pt: 'alta',                                  en: 'high' },
  mapLowY:      { pt: 'baixo',                                 en: 'low' },
  mapHighY:     { pt: 'alto',                                  en: 'high' },
  compareTitle: { pt: 'Comparação com estudos reais',          en: 'Comparison with real studies' },
  compareLead:  { pt: 'Três estudos do corpus, classificados com a mesma ficha. Servem de régua: onde o seu projeto se parece com eles e onde se afasta.',
                  en: 'Three studies from the corpus, classified with the same sheet. Use them as a ruler: where your project resembles them and where it differs.' },
  sheetTitle:   { pt: 'Ficha técnica completa',                en: 'Full spec sheet' },
  sheetLead:    { pt: 'A classificação formal, no vocabulário da taxonomia. É esta ficha que torna dois projetos comparáveis.',
                  en: 'The formal classification, in the taxonomy’s vocabulary. This sheet is what makes two projects comparable.' },
  copySheet:    { pt: 'Copiar ficha',                          en: 'Copy sheet' },
  copied:       { pt: 'Ficha copiada',                         en: 'Sheet copied' },
  copyFail:     { pt: 'Não foi possível copiar. Selecione o texto da ficha e copie manualmente.',
                  en: 'Could not copy. Select the sheet text and copy it manually.' },
  printSheet:   { pt: 'Imprimir ou salvar em PDF',             en: 'Print or save as PDF' },
  notAnswered:  { pt: 'não respondido',                        en: 'not answered' },
  silenceTitle: { pt: 'Índice de silêncio',                    en: 'Silence index' },

  glossTitle:   { pt: 'Glossário',                             en: 'Glossary' },
  glossLead:    { pt: 'Os termos que aparecem nas perguntas, explicados sem jargão.',
                  en: 'The terms used in the questions, explained without jargon.' },
  aboutTitle:   { pt: 'Sobre esta ferramenta',                 en: 'About this tool' },
  backHome:     { pt: 'Voltar ao início',                      en: 'Back to start' },
  levelOk:      { pt: 'Tranquilo',                             en: 'Clear' },
  levelWarn:    { pt: 'Atenção',                               en: 'Attention' },
  levelAlert:   { pt: 'Crítico',                               en: 'Critical' },
  badgeLow:     { pt: 'Adoção de baixo custo',                 en: 'Low-cost adoption' },
  badgeMid:     { pt: 'Adoção com cuidados',                   en: 'Adoption with safeguards' },
  badgeHigh:    { pt: 'Adoção sensível',                       en: 'Sensitive adoption' },
  badgeLowD:    { pt: 'O arranjo mantém a decisão criativa com as pessoas e deixa pouca exposição em aberto.',
                  en: 'The setup keeps creative decisions with people and leaves little exposure open.' },
  badgeMidD:    { pt: 'O arranjo funciona, mas há pontos que precisam de registro, combinado ou sinalização antes de escalar.',
                  en: 'The setup works, but some points need documentation, agreement or disclosure before scaling.' },
  badgeHighD:   { pt: 'O arranjo concentra decisões na máquina e deixa aberta mais de uma frente sensível. Trate os itens críticos antes de usar em produção.',
                  en: 'The setup concentrates decisions in the machine and leaves more than one sensitive front open. Address the critical items before production use.' },
  resultSaved:  { pt: 'Resultado calculado.',                  en: 'Result calculated.' },

  dimOp:        { pt: 'Dimensão operacional',                  en: 'Operational dimension' },
  dimTe:        { pt: 'Dimensão técnica',                      en: 'Technical dimension' },
  dimRi:        { pt: 'Dimensão de risco e ética',             en: 'Risk and ethics dimension' },
  silenceHelp:  { pt: 'Quantas frentes de risco ficaram sem avaliação. Silêncio não é risco baixo: é uma decisão ainda em aberto.',
                  en: 'How many risk fronts were left unassessed. Silence is not low risk: it is a decision still left open.' },
  silenceNone:  { pt: 'Nenhuma frente em silêncio.',           en: 'No silent fronts.' },
  silenceOf:    { pt: '{n} de {total} em aberto',              en: '{n} of {total} still open' },
  footerNote:   { pt: 'Versão preliminar do artefato, para uso em pesquisa e em produção. Não avalia qualidade artística.',
                  en: 'Preliminary version of the artifact, for research and production use. It does not judge artistic quality.' },
  footerCredit: { pt: 'Pesquisa de mestrado · PPGInf / UFPR',  en: 'Master’s research · PPGInf / UFPR' },
  projectOptional:{ pt: 'opcional, aparece na ficha',          en: 'optional, shown on the sheet' },
  howCta:       { pt: 'Começar a classificar',                 en: 'Start classifying' },
  openCase:     { pt: 'Abrir esta ficha',                      en: 'Open this sheet' },
  youVs:        { pt: 'O seu projeto',                         en: 'Your project' },
  printTitle:   { pt: 'Ficha TIGA',                            en: 'TIGA sheet' },
  homeHow:      { pt: 'Cinco passos',                          en: 'Five steps' },
  formTitle:    { pt: 'Classificar projeto',                   en: 'Classify a project' },
  otherLabel:   { pt: 'Outro modelo ou ferramenta',            en: 'Another model or tool' },
  restartConfirm:{ pt: 'Apagar as respostas e começar de novo?', en: 'Clear the answers and start over?' },
  close:        { pt: 'Fechar',                                en: 'Close' }
};

/* --- Passos do protocolo (espelham a rubrica da taxonomia) ------------- */
const STEPS = [
  { n: 1, label: { pt: 'Momento',    en: 'Stage' } },
  { n: 2, label: { pt: 'Decisão',    en: 'Decision' } },
  { n: 3, label: { pt: 'Ferramenta', en: 'Tool' } },
  { n: 4, label: { pt: 'Custos',     en: 'Costs' } },
  { n: 5, label: { pt: 'Ficha',      en: 'Sheet' } }
];

const HOW_STEPS = [
  {
    n: '01',
    title: { pt: 'Onde a IA entra', en: 'Where AI comes in' },
    body:  { pt: 'Você marca as etapas da produção em que a ferramenta é usada. Isso delimita o objeto da ficha.',
             en: 'You tick the production stages where the tool is used. That delimits the object of the sheet.' }
  },
  {
    n: '02',
    title: { pt: 'Quem decide', en: 'Who decides' },
    body:  { pt: 'A pergunta do grau de autonomia. É a que mais muda o resultado, porque subordina as demais escolhas.',
             en: 'The degree-of-autonomy question. It is the one that most changes the result, because it subordinates the other choices.' }
  },
  {
    n: '03',
    title: { pt: 'O que a ferramenta exige', en: 'What the tool demands' },
    body:  { pt: 'Tecnologia, modelo, tipo de saída, onde processa e o gargalo que realmente atrapalha o trabalho.',
             en: 'Technology, model, output type, where it processes, and the bottleneck that actually gets in the way.' }
  },
  {
    n: '04',
    title: { pt: 'O que isso custa', en: 'What that costs' },
    body:  { pt: 'Autoria, viés, trabalho da equipe, possibilidade de repetir o processo e se o público será avisado.',
             en: 'Authorship, bias, the team’s work, whether the process can be repeated, and whether the audience will be told.' }
  },
  {
    n: '05',
    title: { pt: 'Ler a ficha', en: 'Read the sheet' },
    body:  { pt: 'Os três perfis juntos — operacional, técnico e de risco — e o que fazer sobre cada ponto de atenção.',
             en: 'The three profiles together — operational, technical and risk — and what to do about each attention point.' }
  }
];

const DIMS = {
  operational: { pt: 'Operacional', en: 'Operational' },
  technical:   { pt: 'Técnica',     en: 'Technical' },
  risk:        { pt: 'Risco e ética', en: 'Risk and ethics' }
};

const ABOUT = {
  lead: {
    pt: 'Esta ferramenta aplica a TIGA, uma taxonomia multidimensional para classificar o uso de inteligência artificial generativa em filme, série, clipe, publicidade e animação linear.',
    en: 'This tool applies TIGA, a multidimensional taxonomy for classifying the use of generative AI in film, series, music videos, advertising and linear animation.'
  },
  p1: {
    pt: 'O propósito não é dar nota à qualidade da peça. É preencher sempre os mesmos campos — etapa, autonomia, técnica e risco — para que dois projetos, dois estudos ou duas ferramentas possam ser comparados lado a lado. No fim, a ficha aponta o quanto aquele arranjo exige de cuidado com autoria, trabalho, reprodutibilidade e sinalização ao público.',
    en: 'The purpose is not to grade the quality of the piece. It is to fill in the same fields every time — stage, autonomy, technique and risk — so that two projects, two studies or two tools can be compared side by side. At the end, the sheet shows how much care that setup demands around authorship, labour, reproducibility and disclosure to the audience.'
  },
  p2: {
    pt: 'A estrutura veio de um mapeamento sistemático da literatura com 60 estudos primários recuperados na IEEE Xplore e na ACM Digital Library, publicados entre 2023 e abril de 2025. Cada pergunta desta ficha corresponde a uma faceta da taxonomia, e cada faceta rastreia uma subquestão daquele mapeamento.',
    en: 'The structure comes from a systematic mapping of the literature with 60 primary studies retrieved from IEEE Xplore and the ACM Digital Library, published between 2023 and April 2025. Each question on this sheet corresponds to a facet of the taxonomy, and each facet traces back to a sub-question in that mapping.'
  },
  p3: {
    pt: 'Esta é a versão preliminar do artefato, em desenvolvimento no mestrado em Informática da Universidade Federal do Paraná (PPGInf/UFPR). A validação por painel de especialistas e por concordância entre avaliadores ainda está em curso. Use-a como mapa de prontidão, não como laudo definitivo.',
    en: 'This is the preliminary version of the artifact, under development in the Master’s in Computer Science at the Federal University of Paraná (PPGInf/UFPR). Validation by an expert panel and by inter-rater agreement is still underway. Use it as a readiness map, not as a definitive report.'
  },
  author: {
    pt: 'Pesquisa de Guilherme de Queiroz Lima Roth. Orientação de Natasha Malveira Costa Valentim. Coorientação de Rafael de Andrade de Pereira.',
    en: 'Research by Guilherme de Queiroz Lima Roth. Supervised by Natasha Malveira Costa Valentim. Co-supervised by Rafael de Andrade de Pereira.'
  }
};

/* --- Facetas da taxonomia ----------------------------------------------
   Cada faceta guarda: a pergunta em linguagem de produção, a regra formal
   da rubrica (modo técnico), a subquestão de origem no MSL e, quando
   existe correspondência direta, a frequência da resposta no corpus.
   ----------------------------------------------------------------------- */
const FACETS = [
  {
    id: 'stage', dim: 'operational', sq: 'SQ9', step: 1, multi: true, required: true,
    icon: 'clapper',
    question: { pt: 'Em que momento da produção a IA entra?',
                en: 'At what point of production does the AI come in?' },
    hint:     { pt: 'Marque todas as fases em que a ferramenta é usada.',
                en: 'Tick every phase where the tool is used.' },
    formalName: { pt: 'Etapa do pipeline', en: 'Pipeline stage' },
    help:     { pt: 'Atribuída pela fase em que a saída da ferramenta é efetivamente utilizada. Admite mais de um valor.',
                en: 'Assigned by the phase in which the tool’s output is actually used. Accepts more than one value.' },
    options: [
      { id: 'pre',  label: { pt: 'Pré-produção', en: 'Pre-production' },
        desc: { pt: 'Roteiro, concept art, storyboard, animatic, pesquisa visual.',
                en: 'Script, concept art, storyboard, animatic, visual research.' }, icon: 'pencil' },
      { id: 'prod', label: { pt: 'Produção', en: 'Production' },
        desc: { pt: 'Filmagem, captação, animação dos personagens, iluminação.',
                en: 'Shooting, capture, character animation, lighting.' }, icon: 'camera' },
      { id: 'post', label: { pt: 'Pós-produção', en: 'Post-production' },
        desc: { pt: 'Montagem, efeitos visuais, cor, som, dublagem, finalização.',
                en: 'Editing, VFX, colour, sound, dubbing, finishing.' }, icon: 'layers' }
    ]
  },

  {
    id: 'autonomy', dim: 'operational', sq: 'SQ3, SQ9', step: 2, multi: false, required: true,
    icon: 'steering', pivotal: true,
    question: { pt: 'Quando a ferramenta entrega um resultado, quem dá a palavra final?',
                en: 'When the tool delivers a result, who has the final say?' },
    hint:     { pt: 'Esta é a pergunta que mais muda o seu resultado. Pense no dia a dia, não no caso excepcional.',
                en: 'This is the question that changes your result the most. Think about everyday use, not the exception.' },
    formalName: { pt: 'Grau de autonomia', en: 'Degree of autonomy' },
    help:     { pt: 'Atribuída pelo locus da decisão criativa final. Assistente: tarefa discreta e verificável, decisão integralmente humana. Colaboradora: humano e máquina alternam contribuições, com a palavra final do humano. Geradora autônoma: artefato completo com intervenção humana mínima, em que o sistema planeja, gera e autoavalia.',
                en: 'Assigned by the locus of the final creative decision. Assistant: discrete, verifiable task, decision entirely human. Collaborator: human and machine alternate contributions, human has the last word. Autonomous generator: complete artifact with minimal human intervention, the system plans, generates and self-evaluates.' },
    options: [
      { id: 'assistant', label: { pt: 'Assistente', en: 'Assistant' },
        desc: { pt: 'Ela executa uma tarefa específica e eu confiro. Aumentar resolução, tirar um objeto da cena, limpar ruído de áudio, recortar um personagem do fundo.',
                en: 'It performs a specific task and I check it. Upscaling, removing an object from a shot, cleaning audio noise, cutting a character out of the background.' },
        formal: { pt: 'Assistente', en: 'Assistant' }, icon: 'wrench', score: 20 },
      { id: 'collaborator', label: { pt: 'Colaboradora', en: 'Collaborator' },
        desc: { pt: 'Eu e ela vamos e voltamos até chegar no resultado. Escrever o roteiro a quatro mãos, gerar concept art, montar o storyboard a partir de descrições.',
                en: 'The tool and I go back and forth until we get there. Co-writing the script, generating concept art, building the storyboard from descriptions.' },
        formal: { pt: 'Colaboradora', en: 'Collaborator' }, icon: 'handshake', score: 55 },
      { id: 'autonomous', label: { pt: 'Geradora autônoma', en: 'Autonomous generator' },
        desc: { pt: 'Eu dou o comando e ela entrega a peça quase pronta, escolhendo sozinha entre as próprias opções.',
                en: 'I give the command and it delivers a near-finished piece, picking among its own options by itself.' },
        formal: { pt: 'Geradora autônoma', en: 'Autonomous generator' }, icon: 'robot', score: 95 }
    ]
  },

  {
    id: 'interaction', dim: 'operational', sq: 'SQ12', step: 3, multi: true, required: true,
    icon: 'cursor',
    question: { pt: 'Como você comanda a ferramenta?',
                en: 'How do you drive the tool?' },
    hint:     { pt: 'Vale a forma que você usa no dia a dia.',
                en: 'Go with the way you actually use it day to day.' },
    formalName: { pt: 'Modo de interação', en: 'Interaction mode' },
    help:     { pt: 'Atribuída pela forma primária de entrada do usuário. Admite mais de um valor.',
                en: 'Assigned by the primary form of user input. Accepts more than one value.' },
    options: [
      { id: 'prompt', label: { pt: 'Escrevendo o que quero', en: 'Typing what I want' },
        desc: { pt: 'Você descreve em texto e ela produz. É o famoso prompt.',
                en: 'You describe it in text and it produces. The well-known prompt.' },
        formal: { pt: 'Prompt textual', en: 'Textual prompt' }, corpus: 29, icon: 'text' },
      { id: 'gui', label: { pt: 'Por botões e menus', en: 'Through buttons and menus' },
        desc: { pt: 'Uma interface com controles, sliders e painéis, como um software de edição.',
                en: 'An interface with controls, sliders and panels, like editing software.' },
        formal: { pt: 'Interface gráfica (GUI)', en: 'Graphical interface (GUI)' }, corpus: 12, icon: 'sliders' },
      { id: 'multimodal', label: { pt: 'Misturando texto, imagem e som', en: 'Mixing text, image and sound' },
        desc: { pt: 'Você entrega uma referência visual, um áudio ou um vídeo junto com a instrução.',
                en: 'You hand over a visual reference, an audio or a video along with the instruction.' },
        formal: { pt: 'Multimodal', en: 'Multimodal' }, corpus: 7, icon: 'multi' },
      { id: 'api', label: { pt: 'Por código ou integração', en: 'Through code or integration' },
        desc: { pt: 'A ferramenta é chamada por um script ou embutida em outro sistema.',
                en: 'The tool is called by a script or embedded in another system.' },
        formal: { pt: 'Programática (API/SDK)', en: 'Programmatic (API/SDK)' }, corpus: 1, icon: 'code' }
    ]
  },

  {
    id: 'family', dim: 'technical', sq: 'SQ4', step: 3, multi: false, required: true,
    icon: 'chip',
    question: { pt: 'Que tipo de tecnologia está por trás?',
                en: 'What kind of technology is behind it?' },
    hint:     { pt: 'Se você não sabe, marque a última opção. É uma resposta legítima e muito comum.',
                en: 'If you don’t know, tick the last option. It is a legitimate and very common answer.' },
    formalName: { pt: 'Família arquitetural', en: 'Architectural family' },
    help:     { pt: 'Atribuída pela arquitetura declarada. Classificar como híbrido quando duas ou mais famílias operam de forma integrada.',
                en: 'Assigned by the declared architecture. Classify as hybrid when two or more families operate in an integrated way.' },
    options: [
      { id: 'diffusion', label: { pt: 'Geração de imagem e vídeo', en: 'Image and video generation' },
        desc: { pt: 'Ferramentas que constroem a imagem a partir de um chuveirinho e vão limpando até formar a cena.',
                en: 'Tools that build the image out of static noise and clean it up until the scene appears.' },
        formal: { pt: 'Modelos de difusão', en: 'Diffusion models' }, corpus: 29, icon: 'grain', score: 70 },
      { id: 'transformer', label: { pt: 'Modelo de linguagem', en: 'Language model' },
        desc: { pt: 'Ferramentas de texto e planejamento, do tipo que conversa e escreve.',
                en: 'Text and planning tools, the conversational, writing kind.' },
        formal: { pt: 'Transformers / LLMs', en: 'Transformers / LLMs' }, corpus: 22, icon: 'text', score: 60 },
      { id: 'hybrid', label: { pt: 'As duas coisas juntas', en: 'Both together' },
        desc: { pt: 'Um modelo de linguagem planeja a cena e outro modelo desenha. É o arranjo mais comum em agentes.',
                en: 'A language model plans the scene and another model renders it. The usual arrangement in agents.' },
        formal: { pt: 'Modelos híbridos', en: 'Hybrid models' }, corpus: 6, icon: 'merge', score: 80 },
      { id: 'gan', label: { pt: 'Rede adversarial (GAN)', en: 'Adversarial network (GAN)' },
        desc: { pt: 'Geração mais antiga, ainda usada em rosto, voz e efeitos pontuais.',
                en: 'Older generation, still used for faces, voice and targeted effects.' },
        formal: { pt: 'GANs', en: 'GANs' }, corpus: 10, icon: 'swap', score: 65 },
      { id: 'other', label: { pt: 'Outra tecnologia', en: 'Another technology' },
        desc: { pt: 'Autoencoders, redes recorrentes ou algo fora dessas famílias.',
                en: 'Autoencoders, recurrent networks or something outside these families.' },
        formal: { pt: 'Autoencoders / redes recorrentes / outra', en: 'Autoencoders / recurrent networks / other' }, corpus: 5, icon: 'dots', score: 50 },
      { id: 'unknown', label: { pt: 'Não sei dizer', en: 'I don’t know' },
        desc: { pt: 'Você usa a ferramenta pronta e nunca precisou saber o que roda por dentro.',
                en: 'You use the tool as it comes and never needed to know what runs inside.' },
        formal: { pt: 'Não informado', en: 'Not informed' }, icon: 'question', score: 55 }
    ]
  },

  {
    id: 'baseModel', dim: 'technical', sq: 'SQ13', step: 3, multi: true, required: false,
    icon: 'box', allowOther: true,
    question: { pt: 'Qual ferramenta ou modelo você usa?',
                en: 'Which tool or model do you use?' },
    hint:     { pt: 'Marque quantas usar. Isso define o quanto você depende de fornecedores externos.',
                en: 'Tick as many as you use. This defines how much you depend on outside vendors.' },
    formalName: { pt: 'Modelo base', en: 'Base model' },
    help:     { pt: 'Atribuída pelos modelos nominais empregados. Registrar todos quando houver orquestração de vários modelos. Distingue regime de acesso aberto e fechado.',
                en: 'Assigned by the nominal models employed. Record all of them when several models are orchestrated. Distinguishes open and closed access regimes.' },
    options: [
      { id: 'sd', label: { pt: 'Stable Diffusion', en: 'Stable Diffusion' },
        desc: { pt: 'Código e pesos abertos: dá para inspecionar, ajustar e rodar por conta própria.',
                en: 'Open code and weights: you can inspect, fine-tune and run it yourself.' },
        formal: { pt: 'Stable Diffusion (aberto)', en: 'Stable Diffusion (open)' }, corpus: 23, access: 'open', icon: 'grain' },
      { id: 'gpt', label: { pt: 'ChatGPT / GPT-4', en: 'ChatGPT / GPT-4' },
        desc: { pt: 'Serviço fechado: você controla pelo comando, não por dentro.',
                en: 'Closed service: you steer it by the prompt, not from inside.' },
        formal: { pt: 'GPT-4 (fechado)', en: 'GPT-4 (closed)' }, corpus: 12, access: 'closed', icon: 'text' },
      { id: 'mj', label: { pt: 'Midjourney', en: 'Midjourney' },
        desc: { pt: 'Serviço fechado de imagem, muito usado em concept art e storyboard.',
                en: 'Closed image service, widely used for concept art and storyboards.' },
        formal: { pt: 'MidJourney (fechado)', en: 'MidJourney (closed)' }, corpus: 8, access: 'closed', icon: 'sail' },
      { id: 'dalle', label: { pt: 'DALL·E', en: 'DALL·E' },
        desc: { pt: 'Serviço fechado de imagem a partir de texto.',
                en: 'Closed text-to-image service.' },
        formal: { pt: 'DALL·E (fechado)', en: 'DALL·E (closed)' }, corpus: 7, access: 'closed', icon: 'palette' },
      { id: 'clip', label: { pt: 'CLIP', en: 'CLIP' },
        desc: { pt: 'Faz a ponte entre texto e imagem dentro de outras ferramentas.',
                en: 'Bridges text and image inside other tools.' },
        formal: { pt: 'CLIP', en: 'CLIP' }, corpus: 7, access: 'open', icon: 'link' },
      { id: 'video', label: { pt: 'Gerador de vídeo (Runway, Pika, Sora e afins)', en: 'Video generator (Runway, Pika, Sora and similar)' },
        desc: { pt: 'Serviços fechados de texto para vídeo, surgidos depois do recorte do mapeamento.',
                en: 'Closed text-to-video services, released after the mapping’s cut-off.' },
        formal: { pt: 'Outro (gerador de vídeo, fechado)', en: 'Other (video generator, closed)' }, access: 'closed', icon: 'film' },
      { id: 'unknown', label: { pt: 'Não sei qual modelo roda por dentro', en: 'I don’t know which model runs inside' },
        desc: { pt: 'A ferramenta não informa, ou você nunca precisou verificar.',
                en: 'The tool does not say, or you never needed to check.' },
        formal: { pt: 'Não informado', en: 'Not informed' }, access: 'unknown', icon: 'question' }
    ]
  },

  {
    id: 'output', dim: 'technical', sq: 'SQ10', step: 3, multi: true, required: true,
    icon: 'export',
    question: { pt: 'O que sai da ferramenta?',
                en: 'What comes out of the tool?' },
    hint:     { pt: 'O material que você leva para a próxima etapa da produção.',
                en: 'The material you carry into the next production stage.' },
    formalName: { pt: 'Tipo de saída', en: 'Output type' },
    help:     { pt: 'Atribuída pelo artefato entregue. Admite mais de um valor. O valor texto/roteiro foi incorporado após a aplicação da taxonomia a estudos reais.',
                en: 'Assigned by the delivered artifact. Accepts more than one value. The text/script value was added after applying the taxonomy to real studies.' },
    options: [
      { id: 'text', label: { pt: 'Texto ou roteiro', en: 'Text or script' },
        desc: { pt: 'Cenas escritas, diálogos, tratamento, descrição de plano.',
                en: 'Written scenes, dialogue, treatment, shot descriptions.' },
        formal: { pt: 'Texto/roteiro', en: 'Text/script' }, icon: 'pencil', score: 15 },
      { id: 'image', label: { pt: 'Imagem parada', en: 'Still image' },
        desc: { pt: 'Concept art, quadro de storyboard, referência de figurino, cartaz.',
                en: 'Concept art, storyboard frame, costume reference, poster.' },
        formal: { pt: 'Imagem estática', en: 'Static image' }, corpus: 14, icon: 'image', score: 30 },
      { id: 'audio', label: { pt: 'Áudio ou voz', en: 'Audio or voice' },
        desc: { pt: 'Narração, dublagem, voz clonada, trilha, efeito sonoro.',
                en: 'Narration, dubbing, cloned voice, score, sound effect.' },
        formal: { pt: 'Áudio', en: 'Audio' }, icon: 'wave', score: 40 },
      { id: 'asset', label: { pt: 'Elemento reaproveitável', en: 'Reusable element' },
        desc: { pt: 'Movimento 3D, modelo de personagem, textura: entra no seu software e é montado lá.',
                en: '3D motion, character model, texture: it goes into your software and gets assembled there.' },
        formal: { pt: 'Asset', en: 'Asset' }, icon: 'cube', score: 50 },
      { id: 'animation', label: { pt: 'Animação', en: 'Animation' },
        desc: { pt: 'Sequência animada, estilizada ou 2D/3D, com movimento próprio.',
                en: 'Animated sequence, stylised or 2D/3D, with its own motion.' },
        formal: { pt: 'Animação', en: 'Animation' }, corpus: 13, icon: 'sparkle', score: 70 },
      { id: 'video', label: { pt: 'Vídeo pronto', en: 'Finished video' },
        desc: { pt: 'Um trecho ou uma peça inteira que vai direto para a linha de tempo.',
                en: 'A clip or an entire piece that goes straight to the timeline.' },
        formal: { pt: 'Vídeo completo', en: 'Full video' }, corpus: 12, icon: 'film', score: 90 }
    ]
  },

  {
    id: 'infra', dim: 'technical', sq: 'SQ11', step: 3, multi: false, required: true,
    icon: 'server',
    question: { pt: 'Onde o processamento acontece?',
                en: 'Where does the processing happen?' },
    hint:     { pt: 'Onde a conta pesada é feita, não onde você clica.',
                en: 'Where the heavy lifting happens, not where you click.' },
    formalName: { pt: 'Infraestrutura', en: 'Infrastructure' },
    help:     { pt: 'Atribuída por onde ocorre o processamento do modelo. Local: roda em máquina do usuário. Nuvem: acessado por API ou serviço remoto. Híbrido: combina os dois.',
                en: 'Assigned by where model processing occurs. Local: runs on the user’s machine. Cloud: accessed by API or remote service. Hybrid: combines both.' },
    options: [
      { id: 'local', label: { pt: 'No meu computador', en: 'On my own computer' },
        desc: { pt: 'Exige placa de vídeo potente, mas os arquivos não saem da sua casa ou produtora.',
                en: 'Requires a powerful graphics card, but files never leave your home or studio.' },
        formal: { pt: 'Local', en: 'Local' }, corpus: 24, icon: 'desktop', score: 65 },
      { id: 'cloud', label: { pt: 'Na internet, no servidor deles', en: 'Online, on their servers' },
        desc: { pt: 'Você paga por uso e depende da conexão e da empresa continuar oferecendo o serviço.',
                en: 'You pay per use and depend on the connection and on the company keeping the service alive.' },
        formal: { pt: 'Nuvem', en: 'Cloud' }, corpus: 12, icon: 'cloud', score: 45 },
      { id: 'hybrid', label: { pt: 'Um pouco de cada', en: 'A bit of each' },
        desc: { pt: 'Você edita e ajusta na sua máquina, e a geração pesada roda fora. É o arranjo mais comum em produtora.',
                en: 'You edit and tweak on your machine, and the heavy generation runs elsewhere. The usual studio arrangement.' },
        formal: { pt: 'Híbrido', en: 'Hybrid' }, icon: 'shuffle', score: 55 }
    ]
  },

  {
    id: 'bottleneck', dim: 'technical', sq: 'SQ6', step: 3, multi: true, required: true,
    icon: 'alert',
    question: { pt: 'Qual é o maior problema que você enfrenta com a ferramenta?',
                en: 'What is the biggest problem you face with the tool?' },
    hint:     { pt: 'Marque o que realmente atrapalha o seu trabalho.',
                en: 'Tick what actually gets in the way of your work.' },
    formalName: { pt: 'Gargalo dominante', en: 'Dominant bottleneck' },
    help:     { pt: 'Atribuída pelos desafios técnicos mais citados. Admite mais de um valor. A coerência temporal é o obstáculo nomeado dominante do corpus.',
                en: 'Assigned by the most cited technical challenges. Accepts more than one value. Temporal coherence is the corpus’s dominant named obstacle.' },
    options: [
      { id: 'temporal', label: { pt: 'A imagem não se mantém igual entre um quadro e outro', en: 'The image does not hold from one frame to the next' },
        desc: { pt: 'O rosto muda, a camisa listrada troca o número de listras, a luz pisca. A indústria chama isso de cintilação.',
                en: 'The face changes, the striped shirt swaps its number of stripes, the light flickers. The industry calls it flickering.' },
        formal: { pt: 'Coerência temporal', en: 'Temporal coherence' }, corpus: 16, icon: 'flicker', score: 85 },
      { id: 'stability', label: { pt: 'O resultado é imprevisível', en: 'The result is unpredictable' },
        desc: { pt: 'O mesmo comando devolve coisas muito diferentes a cada tentativa.',
                en: 'The same command returns very different things on each attempt.' },
        formal: { pt: 'Estabilidade do sistema', en: 'System stability' }, corpus: 7, icon: 'dice', score: 65 },
      { id: 'latency', label: { pt: 'Demora demais', en: 'It takes too long' },
        desc: { pt: 'Cada tentativa leva tempo o bastante para atrapalhar o cronograma.',
                en: 'Each attempt takes long enough to disrupt the schedule.' },
        formal: { pt: 'Latência / tempo de resposta', en: 'Latency / response time' }, corpus: 5, icon: 'clock', score: 55 },
      { id: 'scale', label: { pt: 'Não aguenta o volume do projeto', en: 'It does not hold the project’s volume' },
        desc: { pt: 'Funciona em um teste curto, mas não em um episódio ou longa inteiro.',
                en: 'It works on a short test, but not on a whole episode or feature.' },
        formal: { pt: 'Escalabilidade', en: 'Scalability' }, corpus: 4, icon: 'stack', score: 60 },
      { id: 'resolution', label: { pt: 'A qualidade não chega no padrão de entrega', en: 'Quality does not reach delivery standard' },
        desc: { pt: 'Resolução, nitidez ou profundidade de cor abaixo do exigido pelo cliente ou pela emissora.',
                en: 'Resolution, sharpness or colour depth below what the client or broadcaster requires.' },
        formal: { pt: 'Limitações de resolução', en: 'Resolution limits' }, corpus: 4, icon: 'grid', score: 45 },
      { id: 'sync', label: { pt: 'Som e imagem não batem', en: 'Sound and picture do not match' },
        desc: { pt: 'Boca fora de sincronia, efeito atrasado, trilha desencontrada da ação.',
                en: 'Lip out of sync, delayed effect, score out of step with the action.' },
        formal: { pt: 'Sincronização áudio-vídeo', en: 'Audio-video synchronisation' }, corpus: 4, icon: 'wave', score: 60 },
      { id: 'cost', label: { pt: 'Sai caro para rodar', en: 'It is expensive to run' },
        desc: { pt: 'Custo de máquina, de créditos ou de assinatura pesa no orçamento.',
                en: 'Machine, credit or subscription cost weighs on the budget.' },
        formal: { pt: 'Custo computacional', en: 'Computational cost' }, corpus: 2, icon: 'coin', score: 70 },
      { id: 'none', label: { pt: 'Nenhum problema sério até agora', en: 'No serious problem so far' },
        desc: { pt: 'A ferramenta atende ao que você precisa hoje.',
                en: 'The tool meets what you need today.' },
        formal: { pt: 'Sem gargalo declarado', en: 'No declared bottleneck' }, icon: 'check', score: 10, exclusive: true }
    ]
  },

  {
    id: 'authorship', dim: 'risk', sq: 'SQ7', step: 4, multi: false, required: true,
    icon: 'signature',
    question: { pt: 'Como fica a autoria do que a ferramenta produz?',
                en: 'What happens to the authorship of what the tool produces?' },
    hint:     { pt: 'Autoria é a segunda preocupação ética mais frequente do corpus: aparece em 17 dos 60 estudos.',
                en: 'Authorship is the corpus’s second most frequent ethical concern: it appears in 17 of the 60 studies.' },
    formalName: { pt: 'Autoria e autenticidade', en: 'Authorship and authenticity' },
    help:     { pt: 'Baixo: autoria humana clara, sem preocupação reportada. Moderado: tema discutido, com salvaguarda de autoria. Alto: geração autônoma sem atribuição clara. Não reportado: ausência de menção.',
                en: 'Low: clear human authorship, no reported concern. Moderate: topic discussed, with an authorship safeguard. High: autonomous generation with no clear attribution. Not reported: no mention.' },
    options: [
      { id: 'low', label: { pt: 'A autoria é claramente das pessoas da equipe', en: 'Authorship clearly belongs to the team' },
        desc: { pt: 'A ferramenta executa, mas o que vale é a decisão de quem assina.',
                en: 'The tool executes, but what counts is the decision of whoever signs it.' },
        formal: { pt: 'Baixo', en: 'Low' }, icon: 'user', score: 10 },
      { id: 'moderate', label: { pt: 'A gente discutiu e combinou como fica', en: 'We discussed it and agreed on the terms' },
        desc: { pt: 'Há acordo escrito, crédito combinado ou política interna sobre o assunto.',
                en: 'There is a written agreement, an agreed credit or an internal policy on it.' },
        formal: { pt: 'Moderado', en: 'Moderate' }, icon: 'doc', score: 45 },
      { id: 'high', label: { pt: 'Sai pronto da máquina, sem atribuição definida', en: 'It comes finished from the machine, with no defined attribution' },
        desc: { pt: 'Ninguém sabe dizer de quem é o resultado, nem em que material ele se baseou.',
                en: 'Nobody can say whose the result is, nor what material it drew on.' },
        formal: { pt: 'Alto', en: 'High' }, icon: 'ghost', score: 90 },
      { id: 'unreported', label: { pt: 'Ainda não paramos para pensar nisso', en: 'We have not stopped to think about it yet' },
        desc: { pt: 'Não é o mesmo que risco baixo: é uma frente ainda em aberto.',
                en: 'This is not the same as low risk: it is a front still left open.' },
        formal: { pt: 'Não reportado', en: 'Not reported' }, icon: 'question', score: 65, silence: true }
    ]
  },

  {
    id: 'bias', dim: 'risk', sq: 'SQ7', step: 4, multi: false, required: true,
    icon: 'balance',
    question: { pt: 'Vocês avaliaram se a ferramenta reproduz estereótipos?',
                en: 'Have you assessed whether the tool reproduces stereotypes?' },
    hint:     { pt: 'Representação de pessoas, corpos, sotaques, cenários e profissões nas imagens geradas.',
                en: 'Representation of people, bodies, accents, settings and occupations in the generated images.' },
    formalName: { pt: 'Viés algorítmico', en: 'Algorithmic bias' },
    help:     { pt: 'Baixo, moderado ou alto pela presença e severidade reportadas. Não reportado quando o estudo não aborda o tema.',
                en: 'Low, moderate or high by reported presence and severity. Not reported when the study does not address the topic.' },
    options: [
      { id: 'low', label: { pt: 'Sim, e não encontramos problema relevante', en: 'Yes, and we found no relevant problem' },
        desc: { pt: 'Houve conferência do material gerado, com registro do que foi checado.',
                en: 'The generated material was reviewed, with a record of what was checked.' },
        formal: { pt: 'Baixo', en: 'Low' }, icon: 'check', score: 10 },
      { id: 'moderate', label: { pt: 'Sim, e corrigimos o que apareceu', en: 'Yes, and we corrected what showed up' },
        desc: { pt: 'Foram necessários ajustes de comando, curadoria ou substituição de material.',
                en: 'Prompt adjustments, curation or material replacement were needed.' },
        formal: { pt: 'Moderado', en: 'Moderate' }, icon: 'doc', score: 45 },
      { id: 'high', label: { pt: 'Sim, e o problema persiste', en: 'Yes, and the problem persists' },
        desc: { pt: 'A ferramenta insiste em repetir padrões que a equipe não quer no material final.',
                en: 'The tool keeps repeating patterns the team does not want in the final material.' },
        formal: { pt: 'Alto', en: 'High' }, icon: 'ghost', score: 90 },
      { id: 'unreported', label: { pt: 'Não avaliamos', en: 'We have not assessed it' },
        desc: { pt: 'Nenhuma conferência sistemática foi feita até agora.',
                en: 'No systematic review has been done so far.' },
        formal: { pt: 'Não reportado', en: 'Not reported' }, icon: 'question', score: 65, silence: true }
    ]
  },

  {
    id: 'labor', dim: 'risk', sq: 'SQ7, SQ15', step: 4, multi: false, required: true,
    icon: 'people',
    question: { pt: 'O que a ferramenta faz com o trabalho das pessoas da equipe?',
                en: 'What does the tool do to your team’s work?' },
    hint:     { pt: 'No corpus, 19 dos 60 estudos apontam impacto sobre a indústria criativa como principal preocupação ética.',
                en: 'In the corpus, 19 of 60 studies flag impact on the creative industry as their main ethical concern.' },
    formalName: { pt: 'Impacto no trabalho', en: 'Impact on labour' },
    help:     { pt: 'Atribuída pelo grau de substituição da tarefa humana. Assistivo: aumenta o profissional. Reconfigurador: desloca competências. Substitutivo: dispensa a função.',
                en: 'Assigned by the degree of substitution of the human task. Assistive: augments the professional. Reconfiguring: shifts competences. Substitutive: removes the role.' },
    options: [
      { id: 'assistive', label: { pt: 'Poupa tempo de quem já faz o trabalho', en: 'It saves time for whoever already does the work' },
        desc: { pt: 'A mesma pessoa segue responsável, com menos etapas repetitivas.',
                en: 'The same person stays responsible, with fewer repetitive steps.' },
        formal: { pt: 'Assistivo', en: 'Assistive' }, icon: 'plus', score: 15 },
      { id: 'reconfiguring', label: { pt: 'Muda o que a pessoa faz no dia a dia', en: 'It changes what the person does day to day' },
        desc: { pt: 'A função vira mais curadoria, direção e supervisão do que execução.',
                en: 'The role becomes more curation, direction and supervision than execution.' },
        formal: { pt: 'Reconfigurador', en: 'Reconfiguring' }, icon: 'shuffle', score: 50 },
      { id: 'substitutive', label: { pt: 'Dispensa uma função que existia antes', en: 'It removes a role that existed before' },
        desc: { pt: 'A vaga ou a diária deixa de ser contratada por causa da ferramenta.',
                en: 'The position or the day rate stops being hired because of the tool.' },
        formal: { pt: 'Substitutivo', en: 'Substitutive' }, icon: 'minus', score: 95 }
    ]
  },

  {
    id: 'reproducibility', dim: 'risk', sq: 'SQ16', step: 4, multi: false, required: true,
    icon: 'repeat',
    question: { pt: 'Outra pessoa conseguiria repetir o seu processo e chegar perto do mesmo resultado?',
                en: 'Could someone else repeat your process and get close to the same result?' },
    hint:     { pt: 'Pense em daqui a um ano, com outra equipe e a ferramenta já atualizada.',
                en: 'Think a year from now, with a different team and the tool already updated.' },
    formalName: { pt: 'Transparência e reprodutibilidade', en: 'Transparency and reproducibility' },
    help:     { pt: 'Alta: dados e modelo abertos, resultado estável. Parcial: dependência de dados fechados ou variabilidade moderada. Baixa: dados fechados e alta variabilidade estocástica.',
                en: 'High: open data and model, stable result. Partial: dependence on closed data or moderate variability. Low: closed data and high stochastic variability.' },
    options: [
      { id: 'high', label: { pt: 'Sim, está tudo registrado', en: 'Yes, everything is recorded' },
        desc: { pt: 'Comandos, versões, configurações e materiais de referência ficam guardados.',
                en: 'Prompts, versions, settings and reference materials are all kept.' },
        formal: { pt: 'Alta', en: 'High' }, icon: 'archive', score: 10 },
      { id: 'partial', label: { pt: 'Mais ou menos, chegaria perto', en: 'Roughly, it would come close' },
        desc: { pt: 'Parte do caminho está anotada, mas depende de um serviço que muda sozinho.',
                en: 'Part of the path is written down, but it depends on a service that changes on its own.' },
        formal: { pt: 'Parcial', en: 'Partial' }, icon: 'half', score: 50 },
      { id: 'low', label: { pt: 'Não, seria outro resultado', en: 'No, it would be a different result' },
        desc: { pt: 'Nada foi anotado, ou a ferramenta nunca devolve o mesmo material duas vezes.',
                en: 'Nothing was written down, or the tool never returns the same material twice.' },
        formal: { pt: 'Baixa', en: 'Low' }, icon: 'ghost', score: 90 }
    ]
  },

  {
    id: 'perceptibility', dim: 'risk', sq: 'SQ17', step: 4, multi: false, required: true,
    icon: 'eye',
    question: { pt: 'Você vai avisar o público que usou IA?',
                en: 'Will you tell the audience that you used AI?' },
    hint:     { pt: 'No corpus, 29 dos 60 estudos, quase metade, não declaram nenhuma intenção sobre isso.',
                en: 'In the corpus, 29 of 60 studies, nearly half, declare no intention on this at all.' },
    formalName: { pt: 'Perceptibilidade', en: 'Perceptibility' },
    help:     { pt: 'Explícita: intenção de sinalizar a origem sintética. Ausente: intenção de não sinalizar, buscando imperceptibilidade. Não informada: intenção não declarada.',
                en: 'Explicit: intention to signal synthetic origin. Absent: intention not to signal, pursuing imperceptibility. Not informed: intention not declared.' },
    options: [
      { id: 'explicit', label: { pt: 'Sim, e faz parte da proposta', en: 'Yes, and it is part of the proposal' },
        desc: { pt: 'O material é assumidamente estilizado, ou há crédito e aviso na peça.',
                en: 'The material is openly stylised, or there is a credit and a notice in the piece.' },
        formal: { pt: 'Explícita', en: 'Explicit' }, corpus: 18, icon: 'eye', score: 10 },
      { id: 'absent', label: { pt: 'Não, quero que passe despercebido', en: 'No, I want it to go unnoticed' },
        desc: { pt: 'O sucesso da peça depende de o espectador não distinguir o que foi gerado.',
                en: 'The piece’s success depends on the viewer not telling what was generated.' },
        formal: { pt: 'Ausente', en: 'Absent' }, corpus: 12, icon: 'eyeoff', score: 85 },
      { id: 'unreported', label: { pt: 'Ainda não decidimos', en: 'We have not decided yet' },
        desc: { pt: 'É a resposta mais comum no corpus, e a que mais expõe o projeto a mudanças de regra.',
                en: 'The most common answer in the corpus, and the one that most exposes a project to rule changes.' },
        formal: { pt: 'Não informada', en: 'Not informed' }, corpus: 29, icon: 'question', score: 65, silence: true }
    ]
  }
];

/* --- Vereditos por tópico ----------------------------------------------
   Seis frentes fixas. O nível (ok | warn | alert) é escolhido pela função
   level(a), que recebe o objeto de respostas.
   ----------------------------------------------------------------------- */
const VERDICTS = [
  {
    id: 'authorship', icon: 'signature',
    title: { pt: 'Autoria e crédito', en: 'Authorship and credit' },
    level: a => ({ low: 'ok', moderate: 'ok', high: 'alert', unreported: 'warn' })[a.authorship] || 'warn',
    body: {
      ok:   { pt: 'A decisão criativa continua identificável em uma pessoa, e é isso que sustenta o crédito na peça. Mantenha o registro de quem decidiu o quê.',
              en: 'The creative decision remains traceable to a person, and that is what sustains the credit on the piece. Keep a record of who decided what.' },
      warn: { pt: 'A autoria do material gerado ainda não foi tratada. Enquanto isso não estiver combinado, cada entrega abre uma discussão nova sobre quem assina e o que pode ser reutilizado.',
              en: 'Authorship of the generated material has not been addressed. Until that is agreed, every delivery reopens the discussion of who signs it and what can be reused.' },
      alert:{ pt: 'O material sai pronto da ferramenta sem atribuição definida. Essa é a configuração de maior exposição: sem saber em que material o modelo se apoiou, você não consegue garantir ao cliente que a peça está livre para uso.',
              en: 'Material comes out of the tool with no defined attribution. This is the highest-exposure configuration: without knowing what material the model leaned on, you cannot assure the client the piece is clear for use.' }
    },
    action: {
      ok:   { pt: 'Registre no contrato de equipe quem responde pelas decisões assistidas por IA.',
              en: 'Record in the team contract who answers for AI-assisted decisions.' },
      warn: { pt: 'Antes da próxima entrega, defina em uma linha quem assina o material gerado e o que a produtora pode reutilizar dele.',
              en: 'Before the next delivery, define in one line who signs the generated material and what the studio may reuse from it.' },
      alert:{ pt: 'Insira uma etapa humana de aprovação com registro, e verifique os termos de licença da ferramenta quanto ao uso comercial da saída.',
              en: 'Add a human approval step with a record, and check the tool’s licence terms for commercial use of the output.' }
    }
  },
  {
    id: 'labor', icon: 'people',
    title: { pt: 'Trabalho da equipe', en: 'Team’s work' },
    level: a => ({ assistive: 'ok', reconfiguring: 'warn', substitutive: 'alert' })[a.labor] || 'warn',
    body: {
      ok:   { pt: 'A ferramenta tira peso das tarefas repetitivas sem deslocar a função. É o arranjo com menor atrito interno e o mais fácil de defender diante da equipe.',
              en: 'The tool takes weight off repetitive tasks without displacing the role. This is the arrangement with the least internal friction and the easiest to defend to the team.' },
      warn: { pt: 'A função muda de natureza: menos execução, mais curadoria e supervisão. É a transformação mais frequente na literatura, e ela exige combinação explícita, não adaptação silenciosa.',
              en: 'The role changes in nature: less execution, more curation and supervision. This is the most frequent transformation in the literature, and it calls for an explicit agreement, not silent adaptation.' },
      alert:{ pt: 'Uma função deixa de ser contratada por causa da ferramenta. Além do efeito sobre as pessoas, isso concentra na produtora um conhecimento que antes estava distribuído na equipe.',
              en: 'A role stops being hired because of the tool. Beyond the effect on people, this concentrates in the studio knowledge that used to be distributed across the team.' }
    },
    action: {
      ok:   { pt: 'Meça o tempo economizado e devolva parte dele à etapa criativa, não só ao cronograma.',
              en: 'Measure the time saved and give part of it back to the creative stage, not just to the schedule.' },
      warn: { pt: 'Nomeie a nova atribuição por escrito e ajuste o cachê e a descrição da função à competência que passou a ser exigida.',
              en: 'Name the new assignment in writing and adjust the rate and job description to the competence now required.' },
      alert:{ pt: 'Verifique acordos sindicais e contratuais aplicáveis antes de firmar a mudança, e considere requalificação em vez de dispensa.',
              en: 'Check applicable union and contractual agreements before making the change permanent, and consider reskilling instead of dismissal.' }
    }
  },
  {
    id: 'reproducibility', icon: 'repeat',
    title: { pt: 'Conseguir repetir o resultado', en: 'Being able to repeat the result' },
    level: a => ({ high: 'ok', partial: 'warn', low: 'alert' })[a.reproducibility] || 'warn',
    body: {
      ok:   { pt: 'Seu processo está documentado o suficiente para ser retomado depois. Numa produção seriada, é isso que permite manter a mesma identidade visual entre episódios.',
              en: 'Your process is documented well enough to be resumed later. On a series, this is what keeps the same visual identity across episodes.' },
      warn: { pt: 'Parte do caminho está anotada, mas o resultado depende de um serviço que muda sem aviso. Uma atualização do fornecedor pode alterar o material no meio do projeto.',
              en: 'Part of the path is written down, but the result depends on a service that changes without notice. A vendor update can shift the material mid-project.' },
      alert:{ pt: 'O processo não é recuperável. Se o cliente pedir uma alteração daqui a três meses, ou se a peça precisar de uma versão nova, você vai começar do zero e o material não vai casar com o que já foi entregue.',
              en: 'The process is not recoverable. If the client asks for a change in three months, or the piece needs a new version, you start from scratch and the material will not match what was already delivered.' }
    },
    action: {
      ok:   { pt: 'Guarde o registro junto do projeto de edição, não em uma pasta pessoal.',
              en: 'Keep the record alongside the edit project, not in a personal folder.' },
      warn: { pt: 'Fixe a versão da ferramenta quando ela permitir e arquive as saídas aprovadas em resolução máxima.',
              en: 'Pin the tool version where possible and archive approved outputs at maximum resolution.' },
      alert:{ pt: 'Comece hoje um registro simples: comando usado, data, versão da ferramenta e arquivo gerado. Três colunas em uma planilha já resolvem.',
              en: 'Start a simple log today: prompt used, date, tool version and generated file. Three columns in a spreadsheet already solve it.' }
    }
  },
  {
    id: 'perceptibility', icon: 'eye',
    title: { pt: 'Avisar o público', en: 'Telling the audience' },
    level: a => ({ explicit: 'ok', unreported: 'warn', absent: 'alert' })[a.perceptibility] || 'warn',
    body: {
      ok:   { pt: 'A origem do material é assumida. Isso protege a peça de questionamentos posteriores e é o regime que melhor acompanha as regras de proveniência que já começaram a ser exigidas.',
              en: 'The material’s origin is owned. That protects the piece from later challenges and is the regime that best tracks the provenance rules already coming into force.' },
      warn: { pt: 'A decisão sobre sinalizar ficou em aberto, que é exatamente onde está quase metade dos estudos do corpus. O problema do silêncio é que ele vira decisão por omissão no dia da entrega.',
              en: 'The disclosure decision was left open, which is exactly where nearly half of the corpus sits. The trouble with silence is that it becomes a decision by omission on delivery day.' },
      alert:{ pt: 'O objetivo é que o espectador não distinga o material gerado. Esse é o regime que concentra a maior exposição ética e regulatória, e ela cresce junto com a qualidade técnica: quanto melhor o resultado, maior o peso de não sinalizar.',
              en: 'The goal is for the viewer not to tell the generated material apart. This regime concentrates the greatest ethical and regulatory exposure, and it grows with technical quality: the better the result, the heavier the weight of not disclosing.' }
    },
    action: {
      ok:   { pt: 'Padronize a forma do aviso, em cartela final ou ficha técnica, para todas as peças.',
              en: 'Standardise the notice, in an end card or spec sheet, across all pieces.' },
      warn: { pt: 'Decida agora, e não na entrega. Uma linha na ficha técnica costuma bastar e evita a discussão depois.',
              en: 'Decide now, not at delivery. One line in the spec sheet usually suffices and heads off the later argument.' },
      alert:{ pt: 'Confirme as regras de sinalização do veículo, da plataforma e do anunciante antes de finalizar, e registre internamente o que foi gerado.',
              en: 'Confirm disclosure rules from the outlet, the platform and the advertiser before finishing, and keep an internal record of what was generated.' }
    }
  },
  {
    id: 'bottleneck', icon: 'alert',
    title: { pt: 'Gargalo técnico', en: 'Technical bottleneck' },
    level: a => {
      const b = a.bottleneck || [];
      if (!b.length || (b.length === 1 && b[0] === 'none')) return 'ok';
      if (b.includes('temporal') || b.length >= 3) return 'alert';
      return 'warn';
    },
    body: {
      ok:   { pt: 'Nenhum gargalo declarado para o uso atual. Vale registrar isso: quando o escopo crescer, é este o item que costuma mudar de estado primeiro.',
              en: 'No declared bottleneck for current use. Worth recording: when scope grows, this is the item that usually changes state first.' },
      warn: { pt: 'Há atrito, mas ele é contornável com ajuste de fluxo. O importante é não descobrir o limite no meio de uma finalização com prazo.',
              en: 'There is friction, but it is workable with a flow adjustment. What matters is not discovering the limit in the middle of a deadline finish.' },
      alert:{ pt: 'A coerência entre quadros é o obstáculo nomeado dominante do corpus, presente em 16 dos 60 estudos, e é justamente o que separa uma peça experimental de uma peça entregável. Enquanto ele não for resolvido, a geração autônoma fica confinada a trechos curtos ou assumidamente estilizados.',
              en: 'Frame-to-frame coherence is the corpus’s dominant named obstacle, present in 16 of 60 studies, and it is precisely what separates an experimental piece from a deliverable one. Until it is solved, autonomous generation stays confined to short or openly stylised segments.' }
    },
    action: {
      ok:   { pt: 'Faça um teste de estresse com a duração real da peça antes de fechar o cronograma.',
              en: 'Run a stress test at the piece’s real duration before locking the schedule.' },
      warn: { pt: 'Reserve tempo de retrabalho no cronograma para o item marcado, em vez de tratá-lo como imprevisto.',
              en: 'Budget rework time in the schedule for the flagged item, instead of treating it as a surprise.' },
      alert:{ pt: 'Trabalhe com planos curtos, cortes mais frequentes e material estilizado; fixe a semente quando a ferramenta permitir e mantenha uma etapa humana de conformação de continuidade.',
              en: 'Work with short shots, more frequent cuts and stylised material; fix the seed where the tool allows and keep a human continuity pass.' }
    }
  },
  {
    id: 'dependency', icon: 'server',
    title: { pt: 'Dependência de fornecedores', en: 'Vendor dependency' },
    level: a => {
      const closed = (a.baseModel || []).filter(m => ['gpt', 'mj', 'dalle', 'video'].includes(m)).length;
      const unknown = (a.baseModel || []).includes('unknown') || a.family === 'unknown';
      if (closed >= 2 || (closed >= 1 && a.infra === 'cloud')) return 'alert';
      if (closed === 1 || unknown || a.infra === 'cloud') return 'warn';
      return 'ok';
    },
    body: {
      ok:   { pt: 'O arranjo mantém o controle do processamento e usa modelos que podem ser inspecionados. É a configuração com menor risco de interrupção por decisão de terceiros.',
              en: 'The setup keeps control of processing and uses models that can be inspected. It is the configuration least at risk of interruption by someone else’s decision.' },
      warn: { pt: 'Uma parte do seu fluxo depende de um serviço que você não controla: preço, disponibilidade e comportamento do modelo podem mudar sem aviso, no meio do projeto.',
              en: 'Part of your flow depends on a service you do not control: price, availability and model behaviour can change without notice, mid-project.' },
      alert:{ pt: 'O fluxo depende de mais de um serviço fechado. O acesso pela interface foi democratizado, mas a capacidade de gerar continua concentrada em poucos fornecedores, e é sobre essa base que a sua entrega está apoiada.',
              en: 'The flow depends on more than one closed service. Access at the interface level has been democratised, but generation capacity remains concentrated in a few vendors, and that is the base your delivery rests on.' }
    },
    action: {
      ok:   { pt: 'Documente os requisitos de máquina para que outra estação da produtora reproduza o ambiente.',
              en: 'Document machine requirements so another studio workstation can reproduce the environment.' },
      warn: { pt: 'Baixe e arquive as saídas aprovadas em resolução máxima, sem depender de a peça continuar disponível na plataforma.',
              en: 'Download and archive approved outputs at maximum resolution, without relying on the piece staying available on the platform.' },
      alert:{ pt: 'Mapeie o custo mensal por fornecedor e teste um caminho alternativo para a etapa mais crítica antes de assumir prazo com cliente.',
              en: 'Map the monthly cost per vendor and test an alternative path for the most critical stage before committing to a client deadline.' }
    }
  }
];

/* --- Recomendações condicionais ---------------------------------------- */
const RULES = [
  {
    id: 'underreported',
    when: (a, s) => s.autonomy >= 90 && s.social < 42,
    tone: 'alert',
    title: { pt: 'Perfil incomum: muita autonomia, pouco risco declarado',
             en: 'Unusual profile: high autonomy, low declared risk' },
    body: { pt: 'Nos 60 estudos do mapeamento, autonomia alta caminha junto com custo sociotécnico alto. O seu perfil foge dessa correlação, o que costuma indicar que autoria, impacto no trabalho ou sinalização ainda não foram examinados de perto, e não que o risco seja mesmo baixo.',
            en: 'Across the mapping’s 60 studies, high autonomy travels with high sociotechnical cost. Your profile breaks that correlation, which usually means authorship, labour impact or disclosure have not been examined closely, rather than that the risk is genuinely low.' }
  },
  {
    id: 'autonomousInvisible',
    when: a => a.autonomy === 'autonomous' && a.perceptibility === 'absent',
    tone: 'alert',
    title: { pt: 'Geração autônoma sem sinalização', en: 'Autonomous generation without disclosure' },
    body: { pt: 'A máquina decide sozinha e o público não será avisado. É a combinação de maior exposição prevista pela taxonomia: cada avanço técnico em realismo aumenta o peso de não sinalizar. Trate a decisão de sinalização como requisito de entrega, no mesmo nível de um direito de imagem.',
            en: 'The machine decides on its own and the audience will not be told. This is the highest-exposure combination the taxonomy predicts: every technical gain in realism raises the weight of not disclosing. Treat the disclosure decision as a delivery requirement, on par with an image release.' }
  },
  {
    id: 'videoTemporal',
    when: a => (a.output || []).includes('video') && (a.bottleneck || []).includes('temporal'),
    tone: 'warn',
    title: { pt: 'Vídeo pronto com problema de continuidade', en: 'Finished video with a continuity problem' },
    body: { pt: 'Entregar vídeo fechado é justamente o uso que menos tolera cintilação, porque o espectador não controla a câmera e qualquer quebra entre quadros derruba a imersão. Planos curtos, cortes mais frequentes e uma passada humana de continuidade resolvem a maior parte dos casos sem trocar de ferramenta.',
            en: 'Delivering finished video is exactly the use that tolerates flickering least, because the viewer does not control the camera and any break between frames destroys immersion. Short shots, more frequent cuts and a human continuity pass solve most cases without changing tools.' }
  },
  {
    id: 'closedNoRecord',
    when: a => a.reproducibility === 'low' && (a.baseModel || []).some(m => ['gpt', 'mj', 'dalle', 'video'].includes(m)),
    tone: 'warn',
    title: { pt: 'Serviço fechado sem registro do processo', en: 'Closed service with no process record' },
    body: { pt: 'Modelo fechado e processo não anotado é a combinação que mais dificulta retomar um projeto. Como você não controla as atualizações do fornecedor, o registro do seu lado é a única âncora que sobra. Anotar comando, data e versão custa pouco e salva a segunda temporada.',
            en: 'A closed model plus an unrecorded process is the combination that makes resuming a project hardest. Since you do not control vendor updates, your own log is the only anchor left. Recording prompt, date and version costs little and saves the second season.' }
  },
  {
    id: 'silenceHeavy',
    when: (a, s) => s.silence >= 2,
    tone: 'warn',
    title: { pt: 'Frentes ainda em aberto', en: 'Fronts still left open' },
    body: { pt: 'Você marcou mais de um item como ainda não avaliado. Na ficha, isso não vira risco baixo: vira silêncio, e o silêncio é a resposta mais comum do corpus justamente nas frentes que depois cobram caro. Escolher uma dessas frentes e fechá-la esta semana já muda o perfil.',
            en: 'You marked more than one item as not yet assessed. On the sheet that does not become low risk: it becomes silence, and silence is the corpus’s most common answer precisely on the fronts that later cost the most. Picking one of them and closing it this week already changes the profile.' }
  },
  {
    id: 'localHeavy',
    when: a => a.infra === 'local' && ((a.output || []).includes('video') || (a.output || []).includes('animation')),
    tone: 'info',
    title: { pt: 'Geração pesada em máquina própria', en: 'Heavy generation on your own machine' },
    body: { pt: 'Gerar vídeo ou animação localmente é o cenário que mais exige placa de vídeo, e é por isso que a pesquisa da área se concentra em poucos laboratórios. A vantagem real é que o material não sai da produtora; a desvantagem é o tempo de máquina parada. Vale medir quantas horas de render o projeto consome antes de fechar o orçamento.',
            en: 'Generating video or animation locally is the scenario that demands the most GPU, which is why research in the field concentrates in a few labs. The real advantage is that material never leaves the studio; the drawback is machine downtime. Worth measuring how many render hours the project consumes before locking the budget.' }
  },
  {
    id: 'assistantSolid',
    when: (a, s) => a.autonomy === 'assistant' && s.social < 35,
    tone: 'good',
    title: { pt: 'Perfil de adoção madura', en: 'Mature adoption profile' },
    body: { pt: 'Ferramenta pontual, decisão humana e poucas frentes em aberto: é o arranjo que a literatura mostra funcionando melhor em produção real, e o que menos depende de a tecnologia melhorar para continuar valendo a pena. O passo seguinte costuma ser medir o ganho de tempo com números, não com impressão.',
            en: 'A targeted tool, human decision-making and few open fronts: this is the arrangement the literature shows working best in real production, and the one that depends least on the technology improving to keep paying off. The next step is usually measuring the time gain with numbers rather than impressions.' }
  },
  {
    id: 'preOnly',
    when: a => (a.stage || []).length === 1 && (a.stage || [])[0] === 'pre',
    tone: 'good',
    title: { pt: 'Uso restrito à pré-produção', en: 'Use confined to pre-production' },
    body: { pt: 'Manter a IA na pré-produção é o caminho de menor atrito: pequenas inconsistências viram inspiração em vez de defeito, e o material gerado nunca chega ao público, o que reduz por construção a questão da sinalização. É por isso que essa é a fase que mais absorveu essas ferramentas até agora.',
            en: 'Keeping AI in pre-production is the lowest-friction path: small inconsistencies become inspiration rather than defects, and the generated material never reaches the audience, which reduces the disclosure question by construction. That is why this phase has absorbed these tools the most so far.' }
  }
];

/* --- Estudos reais do corpus, classificados com a mesma ficha ---------- */
const CASES = [
  {
    id: 'wraiter', name: 'wr-AI-ter',
    note: { pt: 'Roteirização assistida por GPT-4 que preserva a percepção de autoria do roteirista.',
            en: 'GPT-4-assisted screenwriting that preserves the writer’s sense of authorship.' },
    answers: { stage: ['pre'], autonomy: 'collaborator', interaction: ['gui', 'prompt'], family: 'transformer',
      baseModel: ['gpt'], output: ['text'], infra: 'hybrid', bottleneck: ['temporal'],
      authorship: 'moderate', bias: 'unreported', labor: 'reconfiguring', reproducibility: 'partial', perceptibility: 'absent' }
  },
  {
    id: 'magicvfx', name: 'MagicVFX',
    note: { pt: 'Síntese de efeitos visuais a partir de um vídeo-base, uma máscara e um comando de texto.',
            en: 'Visual-effects synthesis from a base video, a mask and a text prompt.' },
    answers: { stage: ['post'], autonomy: 'assistant', interaction: ['multimodal'], family: 'diffusion',
      baseModel: ['video'], output: ['video'], infra: 'local', bottleneck: ['temporal', 'resolution'],
      authorship: 'low', bias: 'unreported', labor: 'assistive', reproducibility: 'partial', perceptibility: 'absent' }
  },
  {
    id: 'animdirector', name: 'Anim-Director',
    note: { pt: 'Agente que gera animações completas a partir de narrativas curtas, orquestrando vários modelos sem intervenção humana rotineira.',
            en: 'Agent that generates full animations from short narratives, orchestrating several models with no routine human intervention.' },
    answers: { stage: ['prod', 'post'], autonomy: 'autonomous', interaction: ['multimodal'], family: 'hybrid',
      baseModel: ['gpt', 'mj', 'video'], output: ['video', 'animation'], infra: 'hybrid', bottleneck: ['temporal', 'stability'],
      authorship: 'high', bias: 'unreported', labor: 'substitutive', reproducibility: 'low', perceptibility: 'absent' }
  }
];

/* --- Glossário ---------------------------------------------------------- */
const GLOSSARY = [
  { term: { pt: 'Taxonomia', en: 'Taxonomy' },
    def: { pt: 'Uma ficha técnica padronizada. Em vez de descrever o uso de IA com palavras soltas, você preenche sempre os mesmos campos, e por isso consegue comparar dois projetos lado a lado.',
           en: 'A standardised spec sheet. Instead of describing AI usage in loose words, you always fill in the same fields, which is what lets you compare two projects side by side.' } },
  { term: { pt: 'Audiovisual não interativo', en: 'Non-interactive audiovisual' },
    def: { pt: 'Obras de progressão linear, em que o espectador assiste sem interferir: filme, série, curta, videoclipe, publicidade. Diferente de jogo ou realidade virtual, onde o público decide o rumo.',
           en: 'Linear works the viewer watches without interfering: film, series, short, music video, advertising. Unlike a game or VR, where the audience decides the course.' } },
  { term: { pt: 'IA generativa', en: 'Generative AI' },
    def: { pt: 'Programas que criam material novo (imagem, texto, som, vídeo) a partir de padrões aprendidos em uma quantidade enorme de material existente. Diferente da IA que apenas reconhece ou classifica.',
           en: 'Software that creates new material (image, text, sound, video) from patterns learned across an enormous amount of existing material. Unlike AI that only recognises or classifies.' } },
  { term: { pt: 'Prompt', en: 'Prompt' },
    def: { pt: 'O comando em texto que você escreve para a ferramenta. É a instrução, e o quanto ela é detalhada muda bastante o resultado.',
           en: 'The text command you write for the tool. It is the instruction, and how detailed it is changes the result considerably.' } },
  { term: { pt: 'Cintilação (flickering)', en: 'Flickering' },
    def: { pt: 'Quando a imagem gerada não se mantém igual de um quadro para o outro: o rosto muda, a roupa troca de padrão, a luz pisca. É o principal obstáculo técnico da área.',
           en: 'When the generated image does not hold from one frame to the next: the face changes, clothing swaps pattern, light pulses. It is the field’s main technical obstacle.' } },
  { term: { pt: 'Modelo aberto e modelo fechado', en: 'Open and closed model' },
    def: { pt: 'No aberto, o programa e os parâmetros são públicos e podem ser ajustados por você. No fechado, você só acessa pelo serviço da empresa e controla o resultado pelo comando.',
           en: 'In an open model, the program and its parameters are public and you can adjust them. In a closed one, you only reach it through the company’s service and steer the result by the prompt.' } },
  { term: { pt: 'Pipeline de produção', en: 'Production pipeline' },
    def: { pt: 'O caminho que a obra percorre: pré-produção (roteiro, storyboard), produção (filmagem ou animação) e pós-produção (montagem, efeitos, cor, som).',
           en: 'The path the work travels: pre-production (script, storyboard), production (shooting or animation) and post-production (editing, effects, colour, sound).' } },
  { term: { pt: 'Custo sociotécnico', en: 'Sociotechnical cost' },
    def: { pt: 'O que a adoção da ferramenta cobra fora da conta técnica: efeitos sobre autoria, sobre o trabalho das pessoas, sobre a possibilidade de repetir o processo e sobre o que o público sabe.',
           en: 'What adopting the tool charges beyond the technical bill: effects on authorship, on people’s work, on the ability to repeat the process and on what the audience knows.' } },
  { term: { pt: 'Faceta', en: 'Facet' },
    def: { pt: 'Cada campo da ficha. A taxonomia é facetada porque um mesmo projeto recebe um valor em todos os campos ao mesmo tempo, em vez de ser encaixado em uma única gaveta.',
           en: 'Each field on the sheet. The taxonomy is faceted because one project receives a value in every field at once, instead of being filed into a single drawer.' } },
  { term: { pt: 'Mapeamento sistemático', en: 'Systematic mapping' },
    def: { pt: 'Um levantamento feito com regra escrita antes: onde buscar, o que incluir, o que excluir e quem avalia. É o que separa uma revisão de literatura de uma leitura pessoal do assunto.',
           en: 'A survey run under rules written in advance: where to search, what to include, what to exclude and who assesses. It is what separates a literature review from a personal reading of the subject.' } }
];

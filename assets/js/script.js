const WHATSAPP_CONTACT_URL =
  "https://wa.me/5577988122481?text=Olá! Quero ingressar na turma de Injetáveis Aplicados a Harmonização Facial e Corporal";

const demos = [
  { image: "demo-1.png" },
  { image: "demo-2.png" },
  { image: "demo-3.png" },
];

const modules = [
  {
    title: "Legislação e Regulamentação Sanitária em Procedimentos Injetáveis",
  },
  {
    title: "Anatomia, Fisiologia do Sistema Tegumentar e Reparação Tecidual",
  },
  {
    title: "Prevenção e Manejo de Intercorrências",
  },
  {
    title: "Harmonização Facial, Corporal e Visagismo",
  },
  {
    title: "PEIM – Procedimento Estético Injetável para Microvasos",
  },
  {
    title: "Ultrassom Microfocado",
  },
  {
    title: "Toxina Botulínica – Full Face",
  },
  {
    title: "Epilação a LED",
  },
  {
    title: "Intradermoterapia Facial, Corporal e Capilar e Skinbooster",
  },
  {
    title: "Bioestimuladores e Fios lisos e Espiculados",
  },
  {
    title: "Harmonização Glútea",
  },
  {
    title: "Preenchedores",
  },
  {
    title: "Prática Supervisionada",
  },
];

const coordinators = [
  {
    image: "coord-1-jeane.png",
    name: "Jeane Rocha",
    description:
      "Tecnóloga em Estética e Cosmética pela FAINOR, com especialização em " +
      "Dermatofuncional, Estética e também em Docência no Ensino Superior com foco em " +
      "Metodologias Ativas. Atualmente, integra o corpo docente do curso de Estética e " +
      "Cosmética da FAINOR.",
  },
  {
    image: "coord-2-luciana.png",
    name: "Luciana Leão",
    description:
      "Formada em Estética e Cosmética, com especialização em Didática e " +
      "Metodologia do Ensino Superior. Possui residência clínica em procedimentos " +
      "injetáveis voltados para a Estética, com ênfase em Intradermoterapia e técnicas " +
      "avançadas de aplicação subcutânea.",
  },
];

const faqs = [
  {
    question: "Qual é a duração da pós-graduação?",
    answer:
      "A pós-graduação tem duração de um ano e oferece uma formação completa com " +
      "aulas teóricas e práticas voltadas diretamente para a atuação no mercado da " +
      "estética avançada.",
  },
  {
    question: "Quais são os diferenciais dessa pós-graduação?",
    answer:
      "A pós se destaca pelo foco em procedimentos injetáveis e tecnologias atuais da estética, " +
      "formação completa nas áreas facial, corporal e capilar, turmas reduzidas para maior " +
      "aproveitamento prático e todo o material didático já incluso.",
  },
  {
    question: "Quais procedimentos injetáveis são abordados?",
    answer:
      "O curso ensina técnicas populares como aplicação de toxina botulínica (Botox), " +
      "fios lisos e espiculados, bioestimuladores de colágeno, preenchedores faciais, " +
      "intradermoterapia, PEIM, harmonização glútea e skinbooster.",
  },
  {
    question: "Quais são as inovações tecnológicas abordadas na pós?",
    answer:
      "Os alunos têm acesso a recursos modernos como depilação a LED, ozonioterapia, " +
      "ultrassom microfocado, remoção de tatuagem e uso de ativos colorimétricos " +
      "personalizados.",
  },
  {
    question: "Em quais áreas poderei atuar após a conclusão do curso?",
    answer:
      "Após a conclusão do curso, o profissional estará apto a atuar em diferentes " +
      "áreas da estética, podendo se destacar nas áreas facial, corporal e capilar, de " +
      "acordo com sua afinidade e objetivo profissional.",
  },
  {
    question: "Preciso adquirir material para acompanhar as aulas?",
    answer:
      "Não é necessário adquirir material adicional para acompanhar as aulas. Todo o " +
      "conteúdo didático e os insumos utilizados durante as práticas são fornecidos " +
      "integralmente pelo curso.",
  },
  {
    question: "A pós-graduação inclui prática com pacientes reais?",
    answer:
      "Sim, a pós-graduação inclui práticas supervisionadas com pacientes reais. " +
      "Essa vivência proporciona experiência prática essencial, aumentando a segurança " +
      "e o domínio das técnicas por parte dos alunos.",
  },
  {
    question: "Quem pode se inscrever nessa pós-graduação?",
    answer:
      "A pós-graduação é voltada para estudantes e profissionais graduados nas áreas " +
      "de Estética e Cosmética, Fisioterapia, Farmácia, Biomedicina e Enfermagem.",
  },
];

const platforms = [
  {
    icon: "instagram",
    label: "@posgraduacaoecursos",
    url: "https://www.instagram.com/posgraduacaoecursos/",
  },
  {
    icon: "whatsapp",
    label: "(77) 98812-2481",
    url: "https://wa.me/5577988122481",
  },
  {
    icon: "whatsapp",
    label: "(77) 98804-2905",
    url: "https://wa.me/5577988042905",
  },
];

document.addEventListener("alpine:initialized", () =>
  document.documentElement.classList.add("is-ready"),
);

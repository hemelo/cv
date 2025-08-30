export type Language = "en" | "pt-br";

export const translations = {
  en: {
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    about: "About",
    showMore: "Show more",
    showLess: "Show less",
    responsibilities: "Responsibilities",
    achievements: "Achievements",
    certificates: "Certificates",
    languages: "Languages",
    interests: "Interests",
    references: "References",
    volunteer: "Volunteer",
    portfolio: "Portfolio",
    printResume: "Print Resume",
    visit: "Visit",
    call: "Call",
    copy: "Copy",
    copied: "Copied!",
    madeBy: "Made by",
    pressCmdK: "Press Cmd + K to open the command palette.",
    searchCommand: "Search Command",
    actions: "Actions",
    social: "Social",
    skillLevel5: "Advanced",
    skillLevel4: "Intermediate-Advanced",
    skillLevel3: "Intermediate",
    skillLevel2: "Basic-Intermediate",
    skillLevel1: "Basic",
    resume: "Resume",
    personalBlog: "Blog",
    system: "System",
    dark: "Dark",
    light: "Light",
    skillsInfo: "Knowledge from Skills",
  },
  "pt-br": {
    summary: "Resumo",
    experience: "Experiência",
    education: "Educação",
    skills: "Habilidades",
    projects: "Projetos",
    about: "Sobre",
    showMore: "Mostrar mais",
    showLess: "Mostrar menos",
    responsibilities: "Responsabilidades",
    achievements: "Conquistas",
    certificates: "Certificados",
    languages: "Idiomas",
    interests: "Interesses",
    references: "Referências",
    volunteer: "Voluntariado",
    portfolio: "Portfólio",
    printResume: "Imprimir Currículo",
    visit: "Visitar",
    call: "Ligar",
    copy: "Copiar",
    copied: "Copiado!",
    madeBy: "Feito por",
    pressCmdK: "Pressione Cmd + K para abrir a paleta de comandos.",
    searchCommand: "Buscar Comando",
    actions: "Ações",
    social: "Social",
    skillLevel5: "Avançado",
    skillLevel4: "Intermediário-Avançado",
    skillLevel3: "Intermediário",
    skillLevel2: "Básico-Intermediário",
    skillLevel1: "Básico",
    resume: "Currículo",
    personalBlog: "Blog Pessoal",
    system: "Sistema",
    dark: "Escuro",
    light: "Claro",
    skillsInfo: "Conhecimentos relacionados às habilidades",
  },
};

export function getTranslation(lang: string, key: string): string {
  return (
    translations[lang as keyof typeof translations]?.[
      key as keyof typeof translations.en
    ] || key
  );
}

export function t(lang: string, key: string): string {
  return getTranslation(lang, key);
}

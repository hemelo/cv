import enCv from "../../cv.json";
import ptBrCv from "../../pt-br.cv.json";
import type { CV, Basics, Work, Education, Skills, Projects, Certificates, Languages, Interests, Footer } from "../cv";
import type { Language } from "./translations";

export function getCvData(lang: Language): CV {
  switch (lang) {
    case "pt-br":
      return ptBrCv as CV;
    default:
      return enCv as CV;
  }
}

export function getBasics(lang: Language): Basics {
  const basics = getCvData(lang).basics;

  // Prefer GitHub avatar if a GitHub profile is present
  try {
    const githubProfile = basics?.profiles?.find((p) => p?.network === "GitHub");
    if (githubProfile?.username) {
      const avatarUrl = `https://github.com/${githubProfile.username}.png`;
      return { ...basics, image: avatarUrl };
    }
  } catch {}

  return basics;
}

export function getWork(lang: Language): Work[] {
  return getCvData(lang).work;
}

export function getEducation(lang: Language): Education[] {
  return getCvData(lang).education;
}

export function getSkills(lang: Language): Skills[] {
  return getCvData(lang).skills;
}

export function getProjects(lang: Language): Projects[] {
  return getCvData(lang).projects;
}

export function getCertificates(lang: Language): Certificates[] {
  return getCvData(lang).certificates;
}

export function getLanguages(lang: Language): Languages[] {
  return getCvData(lang).languages;
}

export function getInterests(lang: Language): Interests[] {
  return getCvData(lang).interests;
}

export function getFooter(lang: Language): Footer | undefined {
  return getCvData(lang).footer;
}

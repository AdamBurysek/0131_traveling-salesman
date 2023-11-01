import sectionsData from "../data/sectionsData.json";

interface Exhibitions {
  [key: string]: {
    label_cz: string;
    label_en: string;
    label_de: string;
    color: string;
  };
}

interface Section {
  label_cz: string;
  label_en: string;
  label_de: string;
  color: string;
}

export function switchLanguage(language: string) {
  if (language == "cz") {
    language = "en";
  } else if (language == "en") {
    language = "de";
  } else {
    language = "cz";
  }
  return language;
}

export function findSection(section: string): Section | [] {
  const data: Exhibitions = sectionsData;
  const keys: string[] = Object.keys(sectionsData);
  for (const key of keys) {
    if (key.toLowerCase() === section.toLowerCase()) {
      return data[key];
    }
  }
  const validSections = keys.join(", ");
  console.error(
    `Don't find section. Please use a valid section name. Possible section names are: ${validSections}.`
  );
  return [];
}

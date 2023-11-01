import {
  HumanImage,
  CivilisationImage,
  PlanetImage,
  MicroworldImage,
} from "../img/sectionImages";
import VIDAhexagonImg from "../img/VIDA_hexagonImg";

interface SectionInfoProps {
  sectionInfo: {
    color: string;
    label_cz: string;
    label_en: string;
    label_de: string;
  };
  language: string;
}

const SectionBadge: React.FC<SectionInfoProps> = ({
  sectionInfo,
  language,
}) => {
  return (
    <div className="top-bar_badge">
      <VIDAhexagonImg color={sectionInfo.color}></VIDAhexagonImg>
      <div className="top-bar_badge_image">
        {sectionInfo.label_en === "human" && (
          <HumanImage color={sectionInfo.color}></HumanImage>
        )}
        {sectionInfo.label_en === "civilisation" && (
          <CivilisationImage color={sectionInfo.color}></CivilisationImage>
        )}
        {sectionInfo.label_en === "planet" && (
          <PlanetImage color={sectionInfo.color}></PlanetImage>
        )}
        {sectionInfo.label_en === "microworld" && (
          <MicroworldImage color={sectionInfo.color}></MicroworldImage>
        )}
      </div>
      <h5
        className="top-bar_badge_text"
        style={{ color: sectionInfo.color }}
      >
        {language === "cz" && sectionInfo.label_cz}
        {language === "en" && sectionInfo.label_en}
        {language === "de" && sectionInfo.label_de}
      </h5>
    </div>
  );
};

export default SectionBadge;

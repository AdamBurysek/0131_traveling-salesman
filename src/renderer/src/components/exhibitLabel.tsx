interface ExhibitLabelProps {
  exhibitInfo: {
    server: boolean;
    id: string;
    label: {
      cz: string;
      en: string;
      de: string;
    };
    x: number;
    y: number;
    port: string;
    baudrate: number;
  };
  language: string;
}

const ExhibitLabel: React.FC<ExhibitLabelProps> = ({
  exhibitInfo,
  language,
}) => {
  if (exhibitInfo) {
    return (
      <h1 className="top-bar_heading">
        {language === "cz" && exhibitInfo.label.cz}
        {language === "en" && exhibitInfo.label.en}
        {language === "de" && exhibitInfo.label.de}
      </h1>
    );
  }

  return null;
};

export default ExhibitLabel;

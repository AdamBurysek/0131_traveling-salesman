import { Home, HowTo, KnowMore } from "../img/sideButtonImages";

interface SideButtonProps {
  className: string;
  activePage: string;
  color: string;
  language: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SideButton: React.FC<SideButtonProps> = ({
  className,
  activePage,
  color,
  language,
  onClick,
}) => {
  return (
    <button
      className={
        activePage === className
          ? `${className}_button active`
          : `${className}_button`
      }
      onClick={onClick}
      id={className}
    >
      <div className={`side-button_icon`}>
        {className === "home" && (
          <Home
            className={className}
            activePage={activePage}
          />
        )}
        {className === "how-to" && (
          <HowTo
            className={className}
            activePage={activePage}
          />
        )}
        {className === "know-more" && (
          <KnowMore
            className={className}
            activePage={activePage}
          />
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="302"
        height="170"
        viewBox="0 0 200 170"
        fill="none"
      >
        <path
          d="M2.19306 85L39.532 2H232V168H39.532L2.19306 85Z"
          fill={activePage === className ? color : "white"}
          stroke={color}
          strokeWidth="4"
        />
      </svg>
      <div className="side_button-text_container">
        {className === "home" && language === "en" && (
          <span className="side_button-text">Home</span>
        )}
        {className === "home" && language === "cz" && (
          <span className="side_button-text">Domů</span>
        )}
        {className === "home" && language === "de" && (
          <span className="side_button-text">Startseite</span>
        )}
        {className === "how-to" && language === "en" && (
          <span className="side_button-text">How-to</span>
        )}
        {className === "how-to" && language === "cz" && (
          <span className="side_button-text">Jak na to</span>
        )}
        {className === "how-to" && language === "de" && (
          <span className="side_button-text">Wie man</span>
        )}
        {className === "know-more" && language === "en" && (
          <span className="side_button-text">Know More</span>
        )}
        {className === "know-more" && language === "cz" && (
          <span className="side_button-text">Dozvědět se více</span>
        )}
        {className === "know-more" && language === "de" && (
          <span className="side_button-text">Mehr wissen</span>
        )}
      </div>
    </button>
  );
};

export default SideButton;

import { useEffect, useState } from "react";

interface StartPageButtonsProps {
  redirectToGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  language: string;
}

const StartPageButtons: React.FC<StartPageButtonsProps> = (props) => {
  const [btnAnimation, setBtnAnimation] = useState<number>(4);

  const btnAnimate = () => {
    for (let i = 0; i <= 4; i++) {
      setTimeout(() => {
        setBtnAnimation(i);
      }, i * 270);
    }
  };

  useEffect(() => {
    if (btnAnimation === 4) {
      setTimeout(btnAnimate, 10000);
    }
  }, [btnAnimation]);
  return (
    <div>
      <button
        id="Easy"
        className={
          btnAnimation === 1
            ? "start_button easy_button animate_button"
            : "start_button easy_button"
        }
        onClick={props.redirectToGame}
      >
        {(() => {
          if (props.language === "cz") {
            return "Jednoduchá";
          } else if (props.language === "de") {
            return "Leicht";
          } else {
            return "Easy";
          }
        })()}
      </button>
      <button
        id="Medium"
        className={
          btnAnimation === 2
            ? "start_button medium_button animate_button"
            : "start_button medium_button"
        }
        onClick={props.redirectToGame}
      >
        {(() => {
          if (props.language === "cz") {
            return "Střední";
          } else if (props.language === "de") {
            return "Mittel";
          } else {
            return "Medium";
          }
        })()}
      </button>
      <button
        id="Hard"
        className={
          btnAnimation === 3
            ? "start_button hard_button animate_button"
            : "start_button hard_button"
        }
        onClick={props.redirectToGame}
      >
        {(() => {
          if (props.language === "cz") {
            return "Těžká";
          } else if (props.language === "de") {
            return "Schwer";
          } else {
            return "Hard";
          }
        })()}
      </button>
    </div>
  );
};

export default StartPageButtons;

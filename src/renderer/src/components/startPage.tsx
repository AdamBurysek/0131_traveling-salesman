import { useState, useEffect } from "react";
import ObchodniCestujiciImg from "../img/ObchodniCestujiciImage.webp";
import CloudsImg from "../img/Clouds.webp";
import "./startPage.css";

interface StartPageProps {
  redirectToGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  language: string;
}

const StartPage: React.FC<StartPageProps> = (props) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [btnAnimation, setBtnAnimation] = useState<number>(4);

  const animate = () => {
    setTimeout(animationSwitch, 690000);
  };

  const btnAnimate = () => {
    for (let i = 0; i <= 4; i++) {
      setTimeout(() => {
        setBtnAnimation(i);
      }, i * 270);
    }
  };

  function animationSwitch() {
    setAnimation(!animation);
  }

  useEffect(() => {
    animate();
  }, [animation]);

  useEffect(() => {
    setTimeout(animationSwitch, 50);
  }, []);

  useEffect(() => {
    if (btnAnimation === 4) {
      setTimeout(btnAnimate, 10000);
    }
  }, [btnAnimation]);

  return (
    <div className="startPage">
      <div className="title">
        <h1 className="game_title">Problém obchodního cestujícího</h1>
      </div>
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
      <img
        className="main_img"
        src={ObchodniCestujiciImg}
        alt=""
      />
      <img
        className={animation ? "clouds clouds_moving" : "clouds"}
        src={CloudsImg}
        alt=""
      />
    </div>
  );
};

export default StartPage;

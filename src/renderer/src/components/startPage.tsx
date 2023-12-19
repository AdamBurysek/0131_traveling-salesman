import ObchodniCestujiciImg from "../img/ObchodniCestujiciImage.webp";
import "./startPage.css";
import MovingClouds from "./movingClouds";
import StartPageButtons from "./startPageButtons";

interface StartPageProps {
  redirectToGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  language: string;
}

const StartPage: React.FC<StartPageProps> = (props) => {
  return (
    <div className="startPage">
      <StartPageButtons
        redirectToGame={props.redirectToGame}
        language={props.language}
      />
      <img
        className="main_img"
        src={ObchodniCestujiciImg}
        alt=""
      />
      <MovingClouds />
    </div>
  );
};

export default StartPage;

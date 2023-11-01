import PreGame from "./preGame";
import { HashRouter } from "react-router-dom";

function Game(props: any) {
  return (
    <HashRouter>
      <PreGame
        language={props.language}
        setGameStarts={props.setGameStarts}
        isActive={props.isActive}
      ></PreGame>
    </HashRouter>
  );
}

export default Game;

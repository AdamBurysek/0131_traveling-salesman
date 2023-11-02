import AppGame from "./App-Game";
import { HashRouter } from "react-router-dom";

interface GameProps {
  language: string;
  setGameStarts: (value: boolean) => void;
  gameStarts: boolean;
  isActive: boolean;
}

function Game(props: GameProps) {
  return (
    <HashRouter>
      <AppGame
        language={props.language}
        setGameStarts={props.setGameStarts}
        gameStarts={props.gameStarts}
        isActive={props.isActive}
      ></AppGame>
    </HashRouter>
  );
}

export default Game;

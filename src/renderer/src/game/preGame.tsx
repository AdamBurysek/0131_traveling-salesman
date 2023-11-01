import { Routes, Route } from "react-router-dom";
import GamePage from "./components/gamePage";
import StartPage from "./components/startPage";
import NotFound from "./components/notFound";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

function PreGame(props: any) {
  const [gameDifficulty, setGameDifficulty] = useState<string>("Easy");

  const navigate = useNavigate();

  const redirectToGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId: string = e.currentTarget.id;
    setGameDifficulty(buttonId);
    navigate("/game");
    props.setGameStarts(true);
  };

  function gameReset() {
    if (props.isActive === false) {
      navigate("/");
      props.setGameStarts(false);
    }
  }

  useEffect(() => {
    gameReset();
  }, [props.isActive]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              redirectToGame={redirectToGame}
              language={props.language}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GamePage
              gameDifficulty={gameDifficulty}
              language={props.language}
              setGameStarts={props.setGameStarts}
            />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default PreGame;

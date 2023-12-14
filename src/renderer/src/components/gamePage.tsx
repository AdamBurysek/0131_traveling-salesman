import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jihomoravskyKraj from "../img/jihomoravskyKraj.webp";
import czechMap from "../img/czechMap.webp";
import worldMap from "../img/worldMap.webp";
import easy from "../data/easy.json";
import medium from "../data/medium.json";
import hard from "../data/hard.json";

let easyArray: any = easy;
let mediumArray: any = medium;
let hardArray: any = hard;

interface GamePageProps {
  gameDifficulty: string;
  language: string;
  setGameStarts: (value: boolean) => void;
}

function GamePage(props: GamePageProps) {
  const [gameData, setGameData] = useState<any>({});
  const [clickCounter, setClickCounter] = useState<number>(1);
  const [distanceCounter, setDistanceCounter] = useState<number>(0);
  const [newX, setNewX] = useState<number>(0);
  const [newY, setNewY] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [drawingResults, setDrawingResults] = useState<boolean>(false);

  const navigate = useNavigate();
  const canvasRef: any = useRef(null);

  useEffect(() => {
    settingGameData();
  }, []);

  let gameArray: {
    image: string | undefined;
    scale: number | undefined;
    shortestDistance: number | undefined;
    coords: any[][] | undefined;
  }[] = [];

  const gotoMainPage = () => {
    navigate("/");
    props.setGameStarts(false);
  };

  function settingGameData() {
    let randomNumber: number = Math.floor(Math.random() * 3) + 1;

    if (props.gameDifficulty === "Easy") {
      gameArray.push({
        image: jihomoravskyKraj,
        scale: easyArray[0].scale,
        shortestDistance: easyArray[randomNumber].shortestDistance,
        coords: initializeVisitedCities(easyArray[randomNumber].coordinates),
      });
    }
    if (props.gameDifficulty === "Medium") {
      gameArray.push({
        image: czechMap,
        scale: mediumArray[0].scale,
        shortestDistance: mediumArray[randomNumber].shortestDistance,
        coords: initializeVisitedCities(mediumArray[randomNumber].coordinates),
      });
    }
    if (props.gameDifficulty === "Hard") {
      gameArray.push({
        image: worldMap,
        scale: hardArray[0].scale,
        shortestDistance: hardArray[randomNumber].shortestDistance,
        coords: initializeVisitedCities(hardArray[randomNumber].coordinates),
      });
    }
    const [gameItem] = gameArray;
    setGameData(gameItem);
    setNewX(gameItem.coords ? gameItem.coords[0][0] : 0);
    setNewY(gameItem.coords ? gameItem.coords[0][1] : 0);
  }

  function tryAgain() {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx: any = canvas.getContext("2d");
      ctx.reset();
      setShowResults(false);
      setClickCounter(1);
      setDistanceCounter(0);
      gameData.coords = initializeVisitedCities(gameData.coords);
    }
  }

  function drawLine(x: number, y: number, nX: number, nY: number) {
    if (canvasRef.current) {
      setNewX(x);
      setNewY(y);
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx: any = canvas.getContext("2d");
      ctx.beginPath();
      ctx.setLineDash([21, 3]);
      ctx.moveTo(nX, nY);
      ctx.lineTo(x, y);
      ctx.lineWidth = 10;
      ctx.strokeStyle = "red";
      ctx.stroke();
    }
  }

  function endingLine(a: number, b: number, c: number, d: number) {
    drawLine(a, b, c, d);
    calculateDistance(a, b, c, d);
    setShowResults(true);
  }

  function drawRestult() {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx: any = canvas.getContext("2d");
      ctx.reset();
      setDistanceCounter(0);
      setDrawingResults(true);
      for (let i = 1; i <= gameData.coords.length - 1; i++) {
        gameData.coords[i][6] = false;
      }
      for (let i = 0; i <= gameData.coords.length - 2; i++) {
        setTimeout(() => {
          gameData.coords[i + 1][6] = true;
          ctx.setLineDash([21, 3]);
          ctx.moveTo(gameData.coords[i][0], gameData.coords[i][1]);
          ctx.lineTo(gameData.coords[i + 1][0], gameData.coords[i + 1][1]);
          ctx.lineWidth = 10;
          ctx.strokeStyle = "green";
          ctx.stroke();
          calculateDistance(
            gameData.coords[i][0],
            gameData.coords[i][1],
            gameData.coords[i + 1][0],
            gameData.coords[i + 1][1]
          );
          if (i === gameData.coords.length - 2) {
            setTimeout(() => {
              ctx.beginPath();
              ctx.setLineDash([21, 3]);
              ctx.moveTo(
                gameData.coords[gameData.coords.length - 1][0],
                gameData.coords[gameData.coords.length - 1][1]
              );
              ctx.lineTo(gameData.coords[0][0], gameData.coords[0][1]);
              ctx.lineWidth = 10;
              ctx.strokeStyle = "green";
              ctx.stroke();
              calculateDistance(
                gameData.coords[gameData.coords.length - 1][0],
                gameData.coords[gameData.coords.length - 1][1],
                gameData.coords[0][0],
                gameData.coords[0][1]
              );
            }, 500);
          }
        }, i * 500);
      }
    }
  }

  function calculateDistance(a: number, b: number, x: number, y: number) {
    const xdist = a - x;
    const ydist = b - y;
    const squaredSum = Math.pow(xdist, 2) + Math.pow(ydist, 2);
    const hypotenuse = Math.floor(Math.sqrt(squaredSum) * gameData.scale);
    setDistanceCounter((distanceCounter) => distanceCounter + hypotenuse);
  }

  function initializeVisitedCities(coordinates: any[]): any[] {
    const modifiedCoordinates = [...coordinates];
    if (modifiedCoordinates.length > 0) {
      modifiedCoordinates[0][6] = true;
    }
    for (let i = 1; i < modifiedCoordinates.length; i++) {
      modifiedCoordinates[i][6] = false;
    }
    return modifiedCoordinates;
  }

  const handleCityButtonClick = (
    coord: [number, number, string, string, string, boolean, boolean]
  ) => {
    calculateDistance(coord[0], coord[1], newX, newY);
    drawLine(coord[0], coord[1], newX, newY);
    coord[6] = true;
    setClickCounter(clickCounter + 1);
    if (clickCounter === gameData.coords.length - 1) {
      endingLine(
        gameData.coords[0][0],
        gameData.coords[0][1],
        coord[0],
        coord[1]
      );
    }
  };

  return (
    <div className="game-screen">
      {gameData.coords
        ? gameData.coords.map((coord: any, index: any) => (
            <button
              className={coord[6] ? "point visited" : "point"}
              style={{ left: coord[0], top: coord[1] }}
              key={index}
              onClick={() => {
                if (!coord[6] && !drawingResults) {
                  handleCityButtonClick(coord);
                }
              }}
            >
              <span
                className={coord[5] ? "point_text text_upper" : "point_text"}
              >
                {props.language === "cz" && coord[2]}
                {props.language === "en" && coord[3]}
                {props.language === "de" && coord[4]}
              </span>
            </button>
          ))
        : null}

      <canvas
        width={1910}
        height={1070}
        className="canvas"
        ref={canvasRef}
        style={canvasStyle}
      />
      <div className="text_background totaldistance_background">
        <h3 className="gamepage_text totaldistance_text">
          {props.language === "cz" && (
            <span>
              Celková vzdálenost: {distanceCounter}
              {props.gameDifficulty === "Hard" ? "Km*" : "Km"}
            </span>
          )}
          {props.language === "en" && (
            <span>
              Total Distance: {distanceCounter}
              {props.gameDifficulty === "Hard" ? "Km*" : "Km"}
            </span>
          )}
          {props.language === "de" && (
            <span>
              Gesamtentfernung: {distanceCounter}
              {props.gameDifficulty === "Hard" ? "Km*" : "Km"}
            </span>
          )}
        </h3>
      </div>

      <div
        className={
          showResults && !drawingResults
            ? "text_background shortestdistance_background show_shortestdistance"
            : "text_background shortestdistance_background"
        }
      >
        <h3
          className={
            props.language === "de" &&
            distanceCounter <= gameData.shortestDistance
              ? "gamepage_text totaldistance_text smaller_text"
              : "gamepage_text totaldistance_text"
          }
        >
          {props.language === "cz" &&
            distanceCounter <= gameData.shortestDistance &&
            `Našel jsi nejkratší možnou cestu`}
          {props.language === "cz" &&
            distanceCounter > gameData.shortestDistance &&
            `Nejkratší možná vzdálenost: ${gameData.shortestDistance} Km`}
          {props.language === "en" &&
            distanceCounter <= gameData.shortestDistance &&
            `You have found the best possible way`}
          {props.language === "en" &&
            distanceCounter > gameData.shortestDistance &&
            `Best possible distance: ${gameData.shortestDistance} Km`}
          {props.language === "de" &&
            distanceCounter <= gameData.shortestDistance &&
            `Sie haben den bestmöglichen Weg gefunden`}
          {props.language === "de" &&
            distanceCounter > gameData.shortestDistance &&
            `Bestmögliche Distanz: ${gameData.shortestDistance} Km`}
        </h3>
      </div>

      <img
        className="game_map"
        src={gameData.image}
        alt=""
      />

      <button
        className="gamepage_text game_button back_button"
        onClick={gotoMainPage}
      >
        {props.language === "cz" && "Zpět"}
        {props.language === "en" && "Back"}
        {props.language === "de" && "Zurück"}
      </button>
      <button
        className={
          showResults &&
          !drawingResults &&
          distanceCounter > gameData.shortestDistance
            ? "gamepage_text game_button again_button show-again_button"
            : "gamepage_text game_button again_button"
        }
        onClick={tryAgain}
      >
        <div className={props.language === "de" ? "small_text" : ""}>
          {props.language === "cz" && "Zkusit znovu"}
          {props.language === "en" && "Try again"}
          {props.language === "de" && "Versuchen Sie es erneut"}
        </div>
      </button>
      <button
        className={
          showResults &&
          !drawingResults &&
          distanceCounter > gameData.shortestDistance
            ? "gamepage_text game_button best-solution_button show-best-solution_button"
            : "gamepage_text game_button best-solution_button"
        }
        onClick={drawRestult}
        disabled={drawingResults}
      >
        {props.language === "cz" && "Zobrazit nejlepší možnou cestu"}
        {props.language === "en" && "Show the best possible way"}
        {props.language === "de" && "Zeigen Sie den bestmöglichen Weg"}
      </button>
    </div>
  );
}

export default GamePage;

const canvasStyle: any = {
  position: "absolute",
  top: "10px",
  left: "10px",
};

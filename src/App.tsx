import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Grid, GridMember, Player} from "./types";
import {gameRules} from "./rules";

function App() {
  const initValues: Grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [gameOver, setGameOver] = useState<true | false>(false);

  const [gridValues, setGridValues] = useState<Grid>(initValues);

  const [player, setPlayer] = useState<Player>(1);

  const setGridMemberValue = (pos: GridMember, value: Player) => {
    let arr: Grid = [...gridValues];
    arr[pos.x][pos.y] = value;
    setGridValues([...arr]);
    setPlayer(player === 1 ? 2 : 1);
    if (gameRules(gridValues)) setGameOver(true);
  };

  const setGridMemberImage = (pos: GridMember) =>
    gridValues[pos.x][pos.y] === 1 ? (
      <img
        src={gridValues[pos.x][pos.y] === 1 ? reactLogo : "/vite.svg"}
        className="logo react"
        alt="React logo"
      />
    ) : gridValues[pos.x][pos.y] === 2 ? (
      <img
        src={gridValues[pos.x][pos.y] === 2 ? "/vite.svg" : reactLogo}
        className="logo"
        alt="Vite logo"
      />
    ) : (
      <img src="/vite.svg" className="logo none" alt="None" />
    );

  return (
    <div className="App">
      <h1> Tic Tac Toe</h1>
      <button
        onClick={() => {
          setGridValues(initValues);
          setGameOver(false);
        }}
      >
        Restart
      </button>
      <div className={gameOver ? "grid game-over" : "grid"}>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[0][0] === "" && !gameOver)
              setGridMemberValue({x: 0, y: 0}, player);
          }}
        >
          {setGridMemberImage({x: 0, y: 0})}
        </div>

        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[0][1] === "" && !gameOver)
              setGridMemberValue({x: 0, y: 1}, player);
          }}
        >
          {setGridMemberImage({x: 0, y: 1})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[0][2] === "" && !gameOver)
              setGridMemberValue({x: 0, y: 2}, player);
          }}
        >
          {setGridMemberImage({x: 0, y: 2})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[1][0] === "" && !gameOver)
              setGridMemberValue({x: 1, y: 0}, player);
          }}
        >
          {setGridMemberImage({x: 1, y: 0})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[1][1] === "" && !gameOver)
              setGridMemberValue({x: 1, y: 1}, player);
          }}
        >
          {setGridMemberImage({x: 1, y: 1})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[1][2] === "" && !gameOver)
              setGridMemberValue({x: 1, y: 2}, player);
          }}
        >
          {setGridMemberImage({x: 1, y: 2})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[2][0] === "" && !gameOver)
              setGridMemberValue({x: 2, y: 0}, player);
          }}
        >
          {setGridMemberImage({x: 2, y: 0})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[2][1] === "" && !gameOver)
              setGridMemberValue({x: 2, y: 1}, player);
          }}
        >
          {setGridMemberImage({x: 2, y: 1})}
        </div>
        <div
          className="grid-member"
          onClick={() => {
            if (gridValues[2][2] === "" && !gameOver)
              setGridMemberValue({x: 2, y: 2}, player);
          }}
        >
          {setGridMemberImage({x: 2, y: 2})}
        </div>
      </div>
    </div>
  );
}

export default App;

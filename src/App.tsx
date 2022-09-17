import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Grid, GridMember, Player} from "./types";
import {gameRules} from "./rules";
import GridTile from "./components/GridTile";
import Header from "./components/Header";

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

  const allowSetGridMemberValue = (position: GridMember) => {
    if (gridValues[position.x][position.y] === "" && !gameOver)
      setGridMemberValue(position, player);
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

  const restartGame = () => {
    setGridValues(initValues);
    setGameOver(false);
  };

  return (
    <div className="App">
      <Header restartGame={restartGame} />
      <div className={gameOver ? "grid game-over" : "grid"}>
        <GridTile
          position={{x: 0, y: 0}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 0, y: 1}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 0, y: 2}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 1, y: 0}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 1, y: 1}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 1, y: 2}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 2, y: 0}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 2, y: 1}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
        <GridTile
          position={{x: 2, y: 2}}
          setGridMemberImage={setGridMemberImage}
          allowSetGridMemberValue={allowSetGridMemberValue}
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import {Grid, GridMember, Player} from "../types";

interface Props {
  gridValues: Grid;
  setGridMemberValue: any;
  setGridMemberImage: any;
  player: Player;
  gameOver: true | false;
  pos: GridMember;
}

const GridTile = ({
  gridValues,
  setGridMemberValue,
  setGridMemberImage,
  player,
  gameOver,
  pos,
}: Props) => {
  return (
    <div
      className="grid-member"
      onClick={() => {
        if (gridValues[0][0] === "" && !gameOver)
          setGridMemberValue(pos, player);
      }}
    >
      {setGridMemberImage(pos)}
    </div>
  );
};

export default GridTile;

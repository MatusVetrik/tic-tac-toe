import React from "react";
import {Grid, GridMember, Player} from "../types";
import "../App.css";

interface Props {
  position: GridMember;
  setGridMemberImage: (pos: GridMember) => JSX.Element;
  allowSetGridMemberValue: (position: GridMember) => void;
}

const GridTile = ({
  position,
  setGridMemberImage,
  allowSetGridMemberValue,
}: Props) => {
  return (
    <div
      className="grid-member"
      onClick={() => allowSetGridMemberValue(position)}
    >
      {setGridMemberImage(position)}
    </div>
  );
};

export default GridTile;

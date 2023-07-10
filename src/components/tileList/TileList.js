import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({list}) => {
  console.log(list); 
  return (
    <div>
      {list.map(({name, ...description},i) => {
        return (
          <Tile name={name} description={Object.values(description)} key={i} />
        );
      })}
    </div>
  );
};

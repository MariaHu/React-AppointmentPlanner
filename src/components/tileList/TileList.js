import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  console.log(contacts); 
  return (
    <div>
      {contacts.map(({name, ...description},i) => {
        return (
          <Tile name={name} description={Object.values(description)} key={i} />
        );
      })}
    </div>
  );
};

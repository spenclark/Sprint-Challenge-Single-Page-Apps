import React from "react";
import { directive } from "@babel/types";

export default function CharacterCard(props) {
  // Pass props into state
  const { image, name, gender, type, origin, } = props.data

  // JSX strucutre
  return (
    <div className="cardChar">  
      <img src={image} />
      <h3>{name}</h3>
      <h4>{gender}</h4>
      <h4>{type}</h4>
      <h4>{origin}</h4>
    </div>
  )
}

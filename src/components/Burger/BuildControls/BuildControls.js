import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((con) => (
        <BuildControl
          key={con.label}
          label={con.label}
          added={() => props.ingredientAdded(con.type)}
          removed={() => props.ingredientRemoved(con.type)}
          disabled={props.disabled[con.type]}
        />
      ))}
      <button className="OrderButton" onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;

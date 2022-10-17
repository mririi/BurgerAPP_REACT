import React from "react";
import AuxComponent from "../../../hoc/AuxComponent";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize"}}>
          {igKey} : {props.ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <AuxComponent>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </AuxComponent>
  );
};

export default OrderSummary;

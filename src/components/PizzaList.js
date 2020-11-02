import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizza = (reduxState) => {
  return reduxState.pizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizza);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas
      </p>
      <p>Your list of pizza's</p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>People bought: {pizza.bought} of these</p>
          </li>
        ))}
      </ul>
      <p>TODO: the list of pizza's</p>
    </div>
  );
}

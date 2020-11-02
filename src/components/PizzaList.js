import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PizzaList.css";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas.slice().sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! You have{" "}
        {user.favorites.length} favorite pizzas:
      </p>
      <ul className="pizzas">
        {pizzas.map((pizza) => {
          const toggle = () => {
            dispatch({
              type: "TOGGLE_FAVORITE_PIZZA",
              payload: pizza.id,
            });
          };

          return (
            <li
              key={pizza.id}
              className="pizza"
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              <button
                onClick={toggle}
                className={`FavToggle ${
                  user.favorites.includes(pizza.id) ? "fav" : ""
                }`}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <div className="Overlay">
                <strong>{pizza.name}</strong> ({pizza.description}) <br />
                <em>Bought {pizza.bought} times</em>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

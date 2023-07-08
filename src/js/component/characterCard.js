import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/cards.css";
import { useContext } from "react";
import { Context } from "../../store/appContext";

const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg bg-secondary cardNumber1">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${
          props.id + 1
        }.jpg`}
        className="card-img-top"
        alt="..."
        style={{ width: "300px", height: "auto", borderRadius: "5px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.item.name}</h5>
        <p className="card-text">Height: {props.item.height}</p>
        <p className="card-text">Mass: {props.item.mass}</p>
        <p className="card-text">Gender: {props.item.gender}</p>
        <div className="buttonContainer">
          <Link to={"/people/" + props.id}>
            <button href="#" className="btn btn-danger">
              Learn More
            </button>
          </Link>
          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.item.name)) {
                alert("Element already on the list");
              } else {
                actions.addFavorites(props.item.name);
              }
            }}>
            <div style={{ marginLeft: "10px" }}>
              <i className="fa-solid fa-star" style={{ color: "#ffd43b" }}></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

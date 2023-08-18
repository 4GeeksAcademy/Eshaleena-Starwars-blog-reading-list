import React, { useContext } from "react";
import "../../../styles/cards.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const PlanetsCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg bg-secondary" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${
          props.id + 1
        }.jpg`}
        className="card-img-top"
        alt="..."
        style={{ borderRadius: "5px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.planet.name}</h5>
        <p className="card-text">Population: {props.planet.population}</p>
        <p className="card-text">Terrain: {props.planet.terrain}</p>
        <p className="card-text">Climate: {props.planet.climate}</p>
        <div className="buttonContainer">
          <Link to={"/planets/" + props.id}>
            <button href="#" className="btn btn-danger">
              Learn More
            </button>
          </Link>
          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.planet.name)) {
                alert("Element already on the list");
              } else {
                actions.addFavorites(props.planet.name);
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

export default PlanetsCard;

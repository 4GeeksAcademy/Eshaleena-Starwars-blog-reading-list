import React from "react";
import "../../../styles/cards.css";
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const VehiclesCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card bg bg-secondary">
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/6.jpg`}
        className="card-img-top"
        alt="Should be a StarShip Image"
        style={{ width: "350px", height: "auto", borderRadius: "5px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.vehicle.name}</h5>
        <p className="card-text">
          Cargo Capacity: {props.vehicle.cargo_capacity}
        </p>
        <p className="card-text">Length: {props.vehicle.length}</p>
        <p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
        <div className="buttonContainer">
          <Link to={"/vehicles/" + props.id}>
            <button href="#" className="btn btn-danger">
              Learn More
            </button>
          </Link>
          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.vehicle.name)) {
                alert("Element already on the list");
              } else {
                actions.addFavorites(props.vehicle.name);
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

export default VehiclesCard;

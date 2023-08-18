import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/about.css";

export const PeopleView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const info = store.people.find((person, idx) => idx == params.id);
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-5 text-center">
          <img
            className="displayedImage border border-warning border-4 border-opacity-50"
            src={`https://starwars-visualguide.com/assets/img/characters/${
              parseInt(params.id) + 1
            }.jpg`}
          />
        </div>
        <div className="col text-white">
          <div className="d-flex justify-content-center">
            <h1 className="text-center">{info.name}</h1>
            <button
              className="favoritesCards"
              onClick={() => {
                if (store.favorites.includes(info.name)) {
                  alert("Element already on the list");
                } else {
                  actions.addFavorites(info.name);
                }
              }}>
              <div style={{ marginLeft: "10px" }}>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffd43b" }}></i>
              </div>
            </button>
          </div>
          <p>
            Veniam irure veniam sit incididunt excepteur magna excepteur non
            aute ut. Nisi irure consectetur enim ullamco irure ad. Tempor eu
            pariatur incididunt id minim in mollit exercitation irure est. Anim
            ex ut est ea exercitation labore aliqua culpa non ut. Ullamco
            pariatur ad adipisicing est minim sunt laborum aliqua amet laboris
            velit anim.
          </p>
        </div>
      </div>
      <div className="row text-white justify-content-center mt-4 border-top border-secondary pt-4">
        <div className="col">
          <h4>Name</h4>
          {info.name}
        </div>
        <div className="col">
          <h4>Birth Year</h4>
          {info.birth_year}
        </div>
        <div className="col">
          <h4>Gender</h4>
          {info.gender}
        </div>
        <div className="col">
          <h4>Height</h4>
          {info.height}
        </div>
        <div className="col">
          <h4>Skin Color</h4>
          {info.skin_color}
        </div>
        <div className="col">
          <h4>Eye Color</h4>
          {info.eye_color}
        </div>
      </div>
    </div>
  );
};

export const PlanetsView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const info = store.planets.find((person, idx) => idx == params.id);
  console.log("Info:", info);
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-5 text-center">
          <img
            className="displayedImage border border-warning border-4 border-opacity-50"
            src={`https://starwars-visualguide.com/assets/img/planets/${
              parseInt(params.id) + 1
            }.jpg`}
          />
        </div>
        <div className="col text-white">
          <div className="d-flex justify-content-center">
            <h1 className="text-center">{info.name}</h1>
            <button
              className="favoritesCards"
              onClick={() => {
                if (store.favorites.includes(info.name)) {
                  alert("Element already on the list");
                } else {
                  actions.addFavorites(info.name);
                }
              }}>
              <div style={{ marginLeft: "10px" }}>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffd43b" }}></i>
              </div>
            </button>
          </div>
          <p>
            Veniam irure veniam sit incididunt excepteur magna excepteur non
            aute ut. Nisi irure consectetur enim ullamco irure ad. Tempor eu
            pariatur incididunt id minim in mollit exercitation irure est. Anim
            ex ut est ea exercitation labore aliqua culpa non ut. Ullamco
            pariatur ad adipisicing est minim sunt laborum aliqua amet laboris
            velit anim.
          </p>
        </div>
      </div>
      <div className="row text-white justify-content-center mt-4 border-top border-secondary pt-4">
        <div className="col">
          <h4>Name</h4>
          {info.name}
        </div>
        <div className="col">
          <h4>Population</h4>
          {info.population}
        </div>
        <div className="col">
          <h4>Terrain</h4>
          {info.terrain}
        </div>
        <div className="col">
          <h4>Climate</h4>
          {info.climate}
        </div>
        <div className="col">
          <h4>Diameter</h4>
          {info.diameter}
        </div>
        <div className="col">
          <h4>Gravity</h4>
          {info.gravity}
        </div>
      </div>
    </div>
  );
};

export const VehiclesView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const info = store.vehicles.find((person, idx) => idx == params.id);
  console.log("Info:", info);
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col text-center">
          <img
            className="displayedImage border border-warning border-4 border-opacity-50"
            src={"https://starwars-visualguide.com/assets/img/vehicles/4.jpg"}
          />
        </div>
        <div className="col text-white">
          <div className="d-flex justify-content-center">
            <h1 className="text-center">{info.name}</h1>
            <button
              className="favoritesCards"
              onClick={() => {
                if (store.favorites.includes(info.name)) {
                  alert("Element already on the list");
                } else {
                  actions.addFavorites(info.name);
                }
              }}>
              <div style={{ marginLeft: "10px" }}>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffd43b" }}></i>
              </div>
            </button>
          </div>
          <p>
            Veniam irure veniam sit incididunt excepteur magna excepteur non
            aute ut. Nisi irure consectetur enim ullamco irure ad. Tempor eu
            pariatur incididunt id minim in mollit exercitation irure est. Anim
            ex ut est ea exercitation labore aliqua culpa non ut. Ullamco
            pariatur ad adipisicing est minim sunt laborum aliqua amet laboris
            velit anim.
          </p>
        </div>
      </div>
      <div className="row text-white justify-content-center mt-4 border-top border-secondary pt-4">
        <div className="col">
          <h4>Model</h4>
          {info.model}
        </div>
        <div className="col">
          <h4>Manufacturer</h4>
          {info.manufacturer}
        </div>
        <div className="col">
          <h4>Cargo Capacity</h4>
          {info.cargo_capacity}
        </div>
        <div className="col">
          <h4>Length</h4>
          {info.length}
        </div>
        <div className="col">
          <h4>Cost</h4>
          {info.cost_in_credits}
        </div>
        <div className="col">
          <h4>Vehicle Class</h4>
          {info.vehicle_class}
        </div>
      </div>
    </div>
  );
};

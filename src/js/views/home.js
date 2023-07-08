import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CharacterCard from "../component/Cards/CharacterCard";
import PlanetsCard from "../component/Cards/PlanetsCard";
import VehiclesCard from "../component/Cards/VehiclesCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="mt-5 bg bg-dark">
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle">Characters</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.people.map((item, index) => {
            return (
              <span style={{ width: "2000px" }} key={index}>
                <CharacterCard
                  item={item}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
        </div>
      </div>
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle">Planets</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.planets.map((planet, index) => {
            return (
              <span style={{ width: "1000px" }} key={index}>
                <PlanetsCard
                  planet={planet}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
          ;
        </div>
      </div>
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle">Vehicles</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.vehicles.map((vehicle, index) => {
            return (
              <span style={{ width: "1000px" }} key={index}>
                <VehiclesCard
                  vehicle={vehicle}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
          ;
        </div>
      </div>
      ;
    </div>
  );
};

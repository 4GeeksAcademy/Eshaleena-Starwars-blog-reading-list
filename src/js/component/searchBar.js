import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [textInput, setTextInput] = useState("");
  const [selectData, setSelectData] = useState("");
  const navigate = useNavigate();

  const peopleArray = store.people.map((person) => person.name);
  const vehiclesArray = store.vehicles.map((vehicle) => vehicle.name);
  const planetsArray = store.planets.map((planet) => planet.name);

  const combinedArray = [...peopleArray, ...vehiclesArray, ...planetsArray];

  //
  const handleSearch = (e) => {
    e.preventDefault();
    for (let i = 0; i < peopleArray.length; i++) {
      if (peopleArray[i].toLowerCase() === textInput.toLowerCase())
        navigate("/people/" + i);
      else if (vehiclesArray[i].toLowerCase() === textInput.toLowerCase())
        navigate("/vehicles/" + i);
      else if (planetsArray[i].toLowerCase() === textInput.toLowerCase())
        navigate("/planets/" + i);
    }
  };

  const filteredArray = combinedArray.filter(
    (item) =>
      item.toLowerCase().includes(textInput.toLowerCase()) && item !== textInput
  );

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          list="people-list"
        />
        <datalist id="people-list">
          {filteredArray.length > 0 &&
            filteredArray.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </datalist>
        <button
          className="btn btn-success"
          type="submit"
          onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

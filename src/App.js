import React, { useState } from "react";

import DropdownComponent from "./DropdownComponent";
import RadioButtonComponent from "./RadioButtonComponent";
import "./styles.css";

export default function App() {
  const initialState = {
    city: ["San Jose", " SantaClara", "San Francisco", "Boston"],
    state: ["CA", "WA", "MA"],
    zip: ["95059", "01702", "98001"]
  };
  const [options, setOptions] = useState(initialState),
    [selectedDropdown, setSelectedDropdown] = useState("city"),
    [selectedRadio, setSelectedRadio] = useState(null),
    [cities, setCities] = useState([
      "San Jose",
      "SantaClara",
      "San Francisco",
      "Boston"
    ]),
    [states, setStates] = useState(["CA", "WA", "MA"]),
    [zipcodes, setZipcodes] = useState(["95059", "01702", "98001"]);

  const onChangeDropdown = (e) => {
    setSelectedDropdown(e.target.value);
  };

  const onChangeRadioBtn = (e) => {
    setSelectedRadio(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h3>Dropdown + radio button</h3>
      <DropdownComponent
        onChange={onChangeDropdown}
        options={Object.keys(options)}
      />
      {selectedDropdown === "city"
        ? cities.map((val, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  value={val}
                  checked={selectedRadio === val}
                  onChange={onChangeRadioBtn}
                />{" "}
                {val}
              </div>
            );
          })
        : selectedDropdown === "state"
        ? states.map((val, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  value={val}
                  checked={selectedRadio === val}
                  onChange={onChangeRadioBtn}
                />{" "}
                {val}
              </div>
            );
          })
        : selectedDropdown === "zip"
        ? zipcodes.map((val, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  value={val}
                  checked={selectedRadio === val}
                  onChange={onChangeRadioBtn}
                />{" "}
                {val}
              </div>
            );
          })
        : ""}
    </div>
  );
}

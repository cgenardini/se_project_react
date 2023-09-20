import React, { useState, useEffect, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Switch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <label className="switch__label">
        <input
          type="checkbox"
          className="switch__checkbox"
          id="switch"
          onChange={handleToggleSwitchChange}
        />

        <p
          className={`switch__temp switch__temp_F ${
            currentTemperatureUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp switch__temp_C ${
            currentTemperatureUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__button switch__button-F"
              : "switch__button switch__button-C"
          }
        ></span>
      </label>
    </>
  );
}

export default ToggleSwitch;

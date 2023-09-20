import React, { useState, useEffect, useContext } from "react";
import { CurrentTempUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Switch.css";

function ToggleSwitch() {
  const { currentTempUnit, handleToggleSwitch } = React.useContext(
    CurrentTempUnitContext
  );

  return (
    <>
      <label className="switch__label">
        <input
          type="checkbox"
          className="switch__checkbox"
          id="switch"
          onChange={handleToggleSwitch}
        />

        <p
          className={`switch__temp switch__temp_F ${
            currentTempUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp switch__temp_C ${
            currentTempUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
        <span
          className={
            currentTempUnit === "F"
              ? "switch__button switch__button-F"
              : "switch__button switch__button-C"
          }
        ></span>
      </label>
    </>
  );
}

export default ToggleSwitch;

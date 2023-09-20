import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/ModalWithForm.css";

function AddGarmentForm({ isOpen, onAddItem, onClose }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    onAddItem({ name, imageUrl, selectedOption });
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetImageUrl = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleRadioSelect = (evt) => {
    setSelectedOption(evt.target.value);
  };
  return (
    <ModalWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      formTitle="New Garment"
      buttonText="Add Garment"
    >
      <fieldset
        className="popup-form__fieldset modal__fieldset_type_edit"
        id="add-form"
      >
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Name</h3>
          <input
            type="text"
            className="popup-form__input popup-form__input_type_name"
            id="title"
            name="name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            required
            onChange={handleSetName}
          />
          <span className="popup-form__error" id="name-error"></span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Image URL</h3>
          <input
            type="url"
            className="popup-form__input popup-form__input_type_url"
            id="url"
            name="url"
            placeholder="Image URL"
            required
            onChange={handleSetImageUrl}
          />
          <span className="popup-form__error" id="url-error"></span>
        </label>

        <label className="popup-form__input-wrap popup-form__radio-button-wrap">
          <h3 className="popup-form__label">Select the weather type:</h3>
          <div className="popup-form__radio-label-wrap">
            <input
              className="popup-form__radio-button"
              type="radio"
              value="hot"
              id="hot-radio"
              name="weather-options"
              checked={selectedOption === "hot"}
              onChange={handleRadioSelect}
            ></input>
            <label
              className={`radio-button__label ${
                selectedOption === "hot" ? "radio-button__label_checked" : ""
              }`}
              htmlFor="hot-radio"
            >
              Hot
            </label>
          </div>
          <div className="popup-form__radio-label-wrap">
            <input
              className="popup-form__radio-button"
              type="radio"
              value="warm"
              id="warm-radio"
              name="weather-options"
              checked={selectedOption === "warm"}
              onChange={handleRadioSelect}
            ></input>
            <label
              className={`radio-button__label ${
                selectedOption === "warm" ? "radio-button__label_checked" : ""
              }`}
              htmlFor="warm-radio"
            >
              Warm
            </label>
          </div>
          <div className="popup-form__radio-label-wrap">
            <input
              className="popup-form__radio-button"
              type="radio"
              value="cold"
              id="cold-radio"
              name="weather-options"
              checked={selectedOption === "cold"}
              onChange={handleRadioSelect}
            ></input>
            <label
              className={`radio-button__label ${
                selectedOption === "cold" ? "radio-button__label_checked" : ""
              }`}
              htmlFor="cold-radio"
            >
              Cold
            </label>
          </div>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddGarmentForm;

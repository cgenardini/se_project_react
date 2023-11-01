import React from "react";
import { useState } from "react";
import { register, authorize } from "../utils/auth";
import { CurrentModal } from "../contexts/CurrentModal";

import "../blocks/RegisterModal.css";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({ onClose, buttonText }) {
  const { setActivePopup } = React.useContext(CurrentModal);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values);
    setActivePopup("login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <ModalWithForm
      onClose={onClose}
      formTitle="Sign Up"
      buttonText={buttonText}
      popupName="register"
      onSubmit={handleSubmit}
    >
      {" "}
      <fieldset
        className="popup-form__fieldset modal__fieldset_type_edit"
        id="add-form"
      >
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Email*</h3>
          <input
            type="email"
            className="popup-form__input popup-form__input_type_email"
            id="title"
            name="email"
            placeholder="Email"
            minLength="1"
            required
            value={values.email}
            onChange={handleChange}
          />
          <span className="popup-form__error" id="name-error"></span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Password*</h3>
          <input
            type="password"
            className="popup-form__input popup-form__input_type_password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleChange}
          />
          <span className="popup-form__error" id="url-error"></span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Name</h3>
          <input
            type="text"
            className="popup-form__input popup-form__input_type_name"
            id="name"
            name="name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            required
            value={values.name}
            onChange={handleChange}
          />
          <span className="popup-form__error" id="name-error"></span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Avatar URL</h3>
          <input
            type="url"
            className="popup-form__input popup-form__input_type_url"
            id="avatar"
            name="avatar"
            placeholder="Avatar URL"
            required
            value={values.avatar}
            onChange={handleChange}
          />
          <span className="popup-form__error" id="url-error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;

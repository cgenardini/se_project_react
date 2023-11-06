import React, { useState } from "react";
import "../blocks/LoginModal.css";
import { authorize } from "../utils/auth";
import { useHistory } from "react-router-dom";
import { CurrentModal } from "../contexts/CurrentModal";
import { IsLoading } from "../contexts/IsLoadingContext";

import ModalWithForm from "./ModalWithForm";

function LoginModal({ onClose, buttonText, handleLogIn }) {
  const history = useHistory();
  const { setActivePopup } = React.useContext(CurrentModal);
  const { setIsLoading } = React.useContext(IsLoading);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    authorize({ email, password })
      .then(() => {
        handleLogIn();
        history.push("/profile");
        setValues({ email: "", password: "" });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <ModalWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      formTitle="Log In"
      buttonText={buttonText}
      popupName="login"
    >
      {" "}
      <fieldset
        className="popup-form__fieldset modal__fieldset_type_edit"
        id="add-form"
      >
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Email</h3>
          <input
            type="email"
            className="popup-form__input popup-form__input_type_email"
            id="email"
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
          <h3 className="popup-form__label">Password</h3>
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
        </label>{" "}
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;

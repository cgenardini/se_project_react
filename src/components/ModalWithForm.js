import "../blocks/popup.css";
import "../blocks/ModalWithForm.css";
import React from "react";
import { useContext } from "react";
import { CurrentModal } from "../contexts/CurrentModal";

function ModalWithForm({
  formTitle,
  buttonText,
  popupName,
  children,
  onClose,
  onSubmit,
}) {
  const { activePopUp, setActivePopup } = React.useContext(CurrentModal);

  const handleSwitchToRegister = () => {
    setActivePopup("register");
  };

  const handleSwitchToLogIn = () => {
    setActivePopup("login");
  };
  return (
    <section
      className={`
    popup popup_type_${popupName}`}
    >
      <div
        className={`popup-form__container popup-form__container_${popupName}`}
      >
        <h3 className="popup-form__header">{formTitle}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="popup-form__button-container">
            <button
              type="submit"
              id="add_submit-button"
              className={`popup-form__button popup-form__button_${popupName} popup-form__button_disabled`}
            >
              {buttonText}
            </button>

            {popupName === "login" && (
              <button
                type="button"
                id="register"
                className="popup__change_register"
                onClick={handleSwitchToRegister}
              >
                or Register
              </button>
            )}
            {popupName === "register" && (
              <button
                type="button"
                id="login"
                className="popup__change_register"
                onClick={handleSwitchToLogIn}
              >
                or Login
              </button>
            )}
          </div>
        </form>

        <button
          type="button"
          className={`popup__close popup__close-form`}
          id="close-add"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ModalWithForm;

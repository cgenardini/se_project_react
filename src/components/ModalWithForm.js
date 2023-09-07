import "../blocks/popup.css";
import "../blocks/ModalWithForm.css";

function ModalWithForm({
  formTitle,
  buttonText,
  popupName,
  children,
  onClose,
}) {
  return (
    <section
      className={`
    popup popup_type_${popupName}`}
    >
      <div className="popup-form__container">
        <h3 className="popup-form__header">{formTitle}</h3>
        <form className="popup-form">{children}</form>

        <button
          type="submit"
          id="add_submit-button"
          className="popup-form__button popup-form__button_disabled"
          disabled
        >
          {buttonText}
        </button>

        <button
          type="button"
          className="popup__close popup__close-form"
          id="close-add"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ModalWithForm;

import React from "react";
import { useContext } from "react";
import { editUser } from "../utils/auth";

import "../blocks/EditProfileModal.css";
import ModalWithForm from "./ModalWithForm";
import { UserInfoContext } from "../contexts/UserInfoContext";

function EditProfileModal({ onClose, buttonText }) {
  const { currentUser, setCurrentUser } = React.useContext(UserInfoContext);
  const [values, setValues] = React.useState({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(values);
    onClose();
    return;
  };

  const handleEditUser = ({ name, avatar }) => {
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");
      editUser({ name, avatar, token: jwt })
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch(console.error);
    }
  };

  return (
    <ModalWithForm
      onClose={onClose}
      formTitle="Edit Profile"
      buttonText={buttonText}
      popupName="edit-profile"
      onSubmit={handleSubmit}
    >
      {" "}
      <fieldset
        className="popup-form__fieldset modal__fieldset_type_edit"
        id="add-form"
      >
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

export default EditProfileModal;

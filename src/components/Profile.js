import "../blocks/Profile.css";
import ProfileCardsContainer from "./ProfileCardsContainer";
import ProfileSideBar from "./ProfileSideBar";

function Profile({ onClick, onCardSelect }) {
  return (
    <div className="profile">
      <ProfileSideBar />
      <ProfileCardsContainer onClick={onClick} onCardSelect={onCardSelect} />
    </div>
  );
}

export default Profile;

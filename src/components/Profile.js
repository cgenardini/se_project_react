import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({ onClick, onCardSelect }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onClick={onClick} onCardSelect={onCardSelect} />
    </div>
  );
}

export default Profile;

import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({
  onClick,
  onCardSelect,
  handleSignOut,
  handleOpenEdit,
  onCardLike,
}) {
  return (
    <div className="profile">
      <SideBar handleSignOut={handleSignOut} handleOpenEdit={handleOpenEdit} />
      <ClothesSection
        onClick={onClick}
        onCardSelect={onCardSelect}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;

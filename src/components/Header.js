import "../blocks/Header.css";

function Header({ logoSrc, currentCity, currentDate, avatar, onClick }) {
  return (
    <header className="header">
      <img alt="image" src={logoSrc} className="header__logo"></img>
      <h1 className="header__date">
        {currentDate}, {currentCity}
      </h1>
      <button type="button" className="header__button" onClick={onClick}>
        + Add clothes
      </button>
      <h1 className="header__name">Cassandra Genardini</h1>
      <img className="header__avatar" alt="avatar" src={avatar}></img>
    </header>
  );
}

export default Header;

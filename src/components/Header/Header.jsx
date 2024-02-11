import "./Header.scss";

export const Header = ({ handleLinkClick }) => {
  const links = [
    "link_1",
    "link_2",
    "link_3",
    "link_4",
    "link_5",
    "link_6",
    "link_7",
    "link_8",
    "link_9",
    "link_10",
  ];
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" onClick={handleLinkClick}>
          Logo
        </a>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          {links.map((link) => (
            <li className="nav__item" key={link}>
              <a href="/" className="nav__link" onClick={handleLinkClick}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

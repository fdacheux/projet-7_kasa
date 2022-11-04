import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

function Navbar() {
  let activeClassName = style.underline;
  const defineClassName = (isActive: boolean) => {
    let className = isActive
      ? `${activeClassName} ${style.navbar__links}`
      : style.navbar__links;
    return className;
  };

  return (
    <nav>
      <ul className={style.navbar}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => defineClassName(isActive)}
          >
            Accueil
          </NavLink>
        </li>
        <li className={style.navbar__aboutLink}>
          <NavLink
            to="/about"
            className={({ isActive }) => defineClassName(isActive)}
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

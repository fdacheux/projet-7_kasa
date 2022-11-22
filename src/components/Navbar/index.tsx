import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

function Navbar() {

  const defineClassName = useCallback((isActive: boolean) => {
    let activeClassName = style.underline;
    let className = isActive
      ? `${activeClassName} ${style.navbar__links}`
      : style.navbar__links;
    return className;
  }, []);


  return (
    <nav>
      <ul className={style.navbar}>
        <li className={style.navbar__listElement}>
          <NavLink
            to="/"
            className={({ isActive }) => defineClassName(isActive)}
          >
            Accueil
          </NavLink>
        </li>
        <li className={`${style.navbar__aboutLink} ${style.navbar__listElement}`}>
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

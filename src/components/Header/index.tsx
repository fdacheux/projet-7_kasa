import style from './Header.module.scss';
import Navbar from "../Navbar"
import KasaLogo from "../../assets/images/logo.svg"

function Header() {
  return (
    <header className={style.header}>
      <img src={KasaLogo} alt="Kasa : site de location d'appartements" />
      <Navbar />
    </header>
  )
}

export default Header

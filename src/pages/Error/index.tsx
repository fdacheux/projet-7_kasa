import { Link } from "react-router-dom";
import style from "./Error.module.scss";

function Error() {
  return (
    <section className={style.errorWrapper}>
      <div className={style.errorBlock}>
        <h1 className={style.title}>404</h1>
        <h2 className={style.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/" className={style.homeLink}>Retourner sur la page d'accueil</Link>
    </section>
  );
}

export default Error;

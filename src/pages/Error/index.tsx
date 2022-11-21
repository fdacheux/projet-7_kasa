import { Link } from "react-router-dom";
import style from "./Error.module.scss";

function Error() {
  return (
    <main>
      <section className={style.errorComponent}>
        <div className={style.errorComponent__container}>
          <h1 className={style.errorComponent__title}>404</h1>
          <h2 className={style.errorComponent__message}>
            Oups! La page que vous demandez n'existe pas.
          </h2>
        </div>
        <Link to="/" className={style.homeLink}>
          Retourner sur la page d'accueil
        </Link>
      </section>
    </main>
  );
}

export default Error;

import style from "./ErrorMessage.module.scss"

const ErrorMessage = () => {
  return (
    <div className={style.error}>
          <h1 className={style.error__message} data-testid="error"> Une erreur est survenue ... </h1>
    </div>
  );
};

export default ErrorMessage;

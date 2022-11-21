import style from "./ErrorMessage.module.scss"

const ErrorMessage = () => {
  return (
    <div className={style.error}>
          <h2 className={style.error__message} data-testid="error"> Une erreur est survenue ... </h2>
    </div>
  );
};

export default ErrorMessage;

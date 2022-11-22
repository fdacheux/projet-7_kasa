import { IHost } from "../../../../models/flat.model";
import style from "./Host.module.scss";

const Host = ({ name, picture }: IHost) => {
  return (
    <div className={style.hostComponent}>
      <div className={style.hostComponent__name}>{name}</div>
      <img src={picture} alt={name} className={style.hostComponent__avatar} />
    </div>
  );
};

export default Host;

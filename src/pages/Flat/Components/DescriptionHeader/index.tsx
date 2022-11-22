import Ratings from "../../Components/Ratings/index";
import Tags from "../../Components/Tags/index";
import Host from "../../Components/Host/index";
import style from "./DescriptionHeader.module.scss";
import { IFlat } from "../../../../models/flat.model"

const DescriptionHeader = ({ title, location, tags, rating, host } : IFlat) => {
  return (
    <section
      className={style.descriptionHeaderBox}
      aria-label={`${title} : informations principales`}
    >
      <header className={style.descriptionHeader}>
        <h1 className={style.descriptionHeader__title}>{title}</h1>
        <h2 className={style.descriptionHeader__subtitle}>{location}</h2>
        <Tags tags={tags} />
      </header>
      <div className={style.descriptionMore}>
        <Ratings stars={rating} />
        <Host {...host} />
      </div>
    </section>
  );
};

export default DescriptionHeader;

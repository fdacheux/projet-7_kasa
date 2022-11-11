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
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{location}</h2>
        <Tags tags={tags} />
      </header>
      <aside className={style.descriptionAside}>
        <Ratings stars={rating} />
        <Host host={host} />
      </aside>
    </section>
  );
};

export default DescriptionHeader;

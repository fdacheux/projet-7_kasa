import Collapse from "../../../../components/Collapse";
import { IFlat } from "../../../../models/flat.model";
import { toKey } from "../../../../utils/toKey.util";
import style from "./DescriptionContent.module.scss";

const DescriptionContent = ({ id, description, equipments }: IFlat) => {
  return (
    <section
      className={style.descriptionContent}
      aria-label="Description et équipements de l'appartement."
    >
      <Collapse id={id} title="Description" isHalfWidth={true}>
        <p className={style.descriptionContent__text}>{description}</p>
      </Collapse>
      <Collapse id={id} title="Équipements" isHalfWidth={true}>
        {
          <ul>
            {equipments.map((element: string) => (
              <li
                key={`tag-${toKey(element)}`}
                className={style.descriptionContent__text}
              >
                {element}
              </li>
            ))}
          </ul>
        }
      </Collapse>
    </section>
  );
};

export default DescriptionContent;

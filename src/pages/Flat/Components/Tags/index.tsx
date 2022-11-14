import { toKey } from "../../../../utils/toKey.util";
import style from "./Tags.module.scss";

const Tags = ({ tags }: any) => {
  const tagsArray = tags;
  return (
    <div className={style.tagsContainer}>
      {tagsArray.map((tag: string) => (
        <div className={style.tag} key={`tag-${toKey(tag)}`}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;

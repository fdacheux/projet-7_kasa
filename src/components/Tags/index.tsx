import style from "./Tags.module.scss";
import { useEffect } from "react"

const Tags = ({ tags }  :  any) => {
    const tagsArray = tags;
    useEffect(() => { console.log(tagsArray) },[tagsArray])
  return (
    <div className={style.tagsContainer}>
      {tagsArray.map((tag: string) => (
        <div className={style.tag}>{tag}</div>
      ))}
    </div>
  );
};

export default Tags;

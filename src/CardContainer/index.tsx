import { useContext } from "react";
import Card from "../Card";
import { Data, Post } from "../Content";
import styles from "./CardContainer.module.css";
import { DataContext } from "../Content";
import { useSearchParams } from "react-router-dom";

const CardContainer = () => {
  const data: Data = useContext(DataContext);
  let list: Post[] = data.posts || [];

  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  if (tag) {
    list = list.filter((p) => p.tags.includes(`#${tag}`));
  }

  if (!list.length) return <h2>No posts for tag: {tag}</h2>;

  return (
    <div className={styles["layout-wrapper"]}>
      <div className={styles.heading}>
        {tag ? (
          <>
            <h2>Posts for tag: {tag}</h2>
            <p>All articles related to {tag}</p>
          </>
        ) : (
          <>
            <h2>All articles</h2>
            <p>All articles I've posted</p>
          </>
        )}
      </div>
      <div className={styles["card-container"]}>
        {list.map((post, idx) => (
          <Card key={`${post.id}-${idx}`} {...post} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

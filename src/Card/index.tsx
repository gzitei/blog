import { Post } from "../Content";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props: Post) => {
  const prefix =
    "https://raw.githubusercontent.com/gzitei/blog-posts/refs/heads/main/posts";
  const img = `${prefix}/${props.id}/${props.image}`;
  return (
    <>
      <Link to={`/article/${props.id}`} className={styles.card}>
        <article>
          <img src={img} alt={props.title} />
          <div className={styles["card-content"]}>
            <h2>{props.title}</h2>
            <p>{props["posted-at"]}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Card;

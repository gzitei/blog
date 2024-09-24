import { Post } from "../Content";
import styles from "./Card.module.css";
import BlogLink from "../BlogLink";

const Card = (props: Post) => {
  const prefix =
    "https://raw.githubusercontent.com/gzitei/blog-posts/refs/heads/main/posts";
  const img = `${prefix}/${props.id}/${props.image}`;
  return (
    <>
      <BlogLink to={`/article/${props.id}`} className={styles.card}>
        <article>
          <img src={img} alt={props.title} />
          <p>{props["posted-at"]}</p>
          <div className={styles["card-content"]}>
            <h2>{props.title}</h2>
          </div>
        </article>
      </BlogLink>
    </>
  );
};

export default Card;

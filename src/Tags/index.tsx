import { useContext, useEffect, useState } from "react";
import styles from "./Tags.module.css";
import { Data, DataContext, Post } from "../Content";
import { Link } from "react-router-dom";

const Tags = () => {
  const data = useContext<Data>(DataContext);

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const posts: Post[] = data.posts;

    const list: string[] = posts.reduce(
      (a: string[], b: Post) => a.concat(b.tags),
      [],
    );

    setTags([...new Set(list)]);
  }, [data]);

  return (
    <div className={styles.block}>
      <h2>Tags by subject</h2>
      <p>Filter content by tag</p>
      <article>{tags.map(Tag)}</article>
    </div>
  );
};

const Tag = (tag: string) => {
  const text = tag.replace("#", "");
  return <Link to={`/blog/?tag=${text}`}>{tag}</Link>;
};

export default Tags;

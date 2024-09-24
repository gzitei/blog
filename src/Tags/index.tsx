import { useContext, useEffect, useState } from "react";
import styles from "./Tags.module.css";
import { Data, DataContext, Post } from "../Content";
import BlogLink from "../BlogLink";

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
    <div>
      <div className={styles.heading}>
        <h2>Tags by subject</h2>
        <p>Filter content by tag</p>
      </div>
      <div className={styles.block}>
        <article>{tags.map(Tag)}</article>
      </div>
    </div>
  );
};

const Tag = (tag: string) => {
  const text = tag.replace("#", "");
  return (
    <BlogLink key={text} to={`/?tag=${text}`}>
      {tag}
    </BlogLink>
  );
};

export default Tags;

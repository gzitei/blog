import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../Content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Article.module.css";

//TODO add syntax highlighting

const Article = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id!),
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <article className={`${styles.art}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
      </article>
    </>
  );
};

const fetchArticle = async (id: string) => {
  const prefix =
    "https://raw.githubusercontent.com/gzitei/blog-posts/refs/heads/main/posts";
  const url = `${prefix}/${id}/README.md`;
  const res = await fetch(url);
  const blob = await res.blob();
  const md = await blob.text();
  return md;
};

export default Article;

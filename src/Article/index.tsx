import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../Content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.min.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./Article.module.css";

const Article = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id!),
  });

  useEffect(() => {
    if (data) {
      hljs.highlightAll();
    }
  }, [data]);

  if (isLoading) return <Loading />;
  const articleHtml = parseMarkdown(data!);

  return (
    <>
      <article className={`${styles.art}`}>{articleHtml}</article>
    </>
  );
};

const parseMarkdown = (data: string) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>;
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

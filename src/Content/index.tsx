import { useQuery } from "@tanstack/react-query";
import styles from "./Content.module.css";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ContentProps {
  children: ReactNode;
}

export type Post = {
  "posted-at": string;
  id: string;
  title: string;
  tags: Array<string>;
  image: string;
};

export type Data = {
  posts: Array<Post>;
};

export const DataContext = createContext<Data>({ posts: [] });

const DataProvider = (props: ContentProps) => {
  const [posts, setPosts] = useState({ posts: [] });

  const { isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchMetadata,
  });

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <DataContext.Provider value={posts}>{props.children}</DataContext.Provider>
  );
};

const Content = (props: ContentProps) => {
  return (
    <DataProvider>
      <main className={styles.content}>{props.children}</main>
    </DataProvider>
  );
};

export function Loading() {
  return <h2>⭮ Loading...</h2>;
}

async function fetchMetadata() {
  const prefix =
    "https://raw.githubusercontent.com/gzitei/blog-posts/refs/heads/main/";
  const postsUrl = prefix + "metadata.json";
  const resp = await fetch(postsUrl);
  const json = await resp.json();
  return json;
}

export default Content;

import styles from "../../styles/BlogPost.module.css";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fs from "fs";
import Head from "next/head";
const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  const router = useRouter();
  //extract parameter from url
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "how-to-learn-javascript",
        },
      },
      {
        params: {
          slug: "how-to-learn-nextjs",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: {
      blog: JSON.parse(blog),
    },
  };
}

export default Slug;
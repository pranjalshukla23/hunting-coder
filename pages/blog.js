import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";

const Blog = (props) => {
  console.log(props);

  const [blogs, setBlogs] = useState(props.blogs);

  const [count, setCount] = useState(2);

  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 1}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
      </Head>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the
          // next data
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blog) => {
            return (
              <div key={blog.slug} className={styles.blogItem}>
                <h2>{blog.title}</h2>
                <p>{blog.content.substring(0, 400)}</p>
                <Link href={`/blogpost/${blog.slug}`}>
                  <button className={styles.button}>Read more</button>
                </Link>
                <hr />
              </div>
            );
          })}
        </InfiniteScroll>

        {/*{blogs.map((blog) => {*/}
        {/*  return (*/}
        {/*    <div key={blog.slug} className={styles.blogItem}>*/}
        {/*      <h2>{blog.title}</h2>*/}
        {/*      <p>{blog.content.substring(0, 400)}</p>*/}
        {/*      <Link href={"/blogpost/how-to-learn-javascript"}>*/}
        {/*        <button className={styles.button}>Read more</button>*/}
        {/*      </Link>*/}
        {/*      <hr />*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let allBlogs = [];
  for (let i = 0; i < 2; i++) {
    let myFile = await fs.promises.readFile(`blogdata/${data[i]}`, "utf-8");

    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: {
      blogs: allBlogs,
      allCount,
    },
  };
}

export default Blog;
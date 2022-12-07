import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  //console.log(styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="hunting coder, blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.imagewrap}>
          <img
            className={styles.myimg}
            src="/coding.jpg"
            alt="coding"
            width={300}
            height={200}
          ></img>
        </div>
        <h1 className={styles.title}>&lt;Hunting Coder /&gt;</h1>

        <div>
          <h2 className={styles.subheading}>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is used to add logic to website</p>
            <Link href={"/blogpost/how-to-learn-javascript"}>
              <button className={styles.button}>Read more</button>
            </Link>
            <hr />
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Nextjs in 2022</h3>
            <p>Nextjs is used to add logic to website</p>
            <Link href={"/blogpost/how-to-learn-nextjs"}>
              <button className={styles.button}>Read more</button>
            </Link>
            <hr />
          </div>
        </div>
      </main>
    </div>
  );
}
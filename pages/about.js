import styles from "../styles/About.module.css";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.center}>About Hunting Coder</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
          amet aperiam asperiores autem blanditiis consectetur cupiditate
          dolores doloribus eligendi error hic libero magnam magni, nemo nobis
          numquam officiis omnis pariatur praesentium provident quaerat quis,
          repudiandae temporibus totam vel veritatis voluptate? Aliquam beatae
          dolorum ea, enim inventore ipsam sit tempore. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Accusamus ad atque blanditiis
          exercitationem iste praesentium quos sint sit? Commodi fuga fugit
          illum ipsum magnam quisquam quos repellendus, sit? Animi aperiam
          beatae deleniti doloribus id itaque laborum maxime minus mollitia
          sunt? Autem, dicta dolorem earum excepturi illum nulla quas. Fuga,
          quas!
        </p>
        <h2>Services Offered</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          autem consequatur debitis dignissimos doloremque ducimus eius eligendi
          explicabo fuga harum id iusto possimus quisquam ratione, sapiente sit
          soluta temporibus unde.
        </p>
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          aliquid, cumque enim maxime modi quisquam tempora! Cum excepturi fugit
          hic inventore nulla quaerat, quas qui quod sequi suscipit, tenetur
          velit.
        </p>
      </div>
    </>
  );
};

export default About;
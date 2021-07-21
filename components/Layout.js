// Module Import
import Head from "next/head";

// Style Imports
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { title, keywords, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events ",
};

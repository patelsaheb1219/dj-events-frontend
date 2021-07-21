// Module Import
import Link from "next/link";

// Icon Import
import { FaExclamationTriangle } from "react-icons/fa";

// File Import
import Layout from "../components/Layout";
import styles from "../styles/404.module.css"

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <FaExclamationTriangle size={50} /> 
        <h1>404</h1>
        <h4>Sorry! There is Nothing here</h4>
        <Link href="/">Go to Home</Link>
      </div>
    </Layout>
  )
}

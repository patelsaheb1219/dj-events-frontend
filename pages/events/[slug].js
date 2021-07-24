// Module Import
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

// File Imports
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function Event(props) {
  const { evt } = props;

  const deleteEvent = (evt) => {
    console.log(evt);
  }
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.control}>
          <Link href={`/event/edit/${evt.id}`}>
            <a><FaPencilAlt /> Edit</a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}> <FaTimes /> Delete</a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {
          evt.image && (
            <div className={styles.image}>
              <Image src={evt.image} width={960} height={600} />
            </div>
          )
        }
        <h3>Performers: </h3>
        <p>{evt.performers}</p>

        <h3>Decription: </h3>
        <p>{evt.decription}</p>

        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href={"/events"}><a className={styles.back}>{`< `} Go Back</a></Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map(evt => ({
    params: {slug: evt.slug}
  }))
  console.log("paths", paths);
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({params: {slug}}) {
  const response = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await response.json();
  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  }
} 
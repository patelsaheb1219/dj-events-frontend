// Component Imports
import Link from "next/link";

// File/Variable Imports
import { API_URL } from "@/config/index";
import EventItem from "@/components/Event/EventItem";
import Layout from "@/components/Layout";

export default function Home(props) {
  const { events } = props;
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View all Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events: events.slice(0,3) },
    revalidate: 1,
  };
}

// Component Imports
import Layout from "@/components/Layout";

// File/Variable Imports
import { API_URL } from "@/config/index";

export default function Home(props) {
  const { events } = props;
  return (
    <Layout>
      {console.log(events)};
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: {events},
    revalidate: 1
  }
}

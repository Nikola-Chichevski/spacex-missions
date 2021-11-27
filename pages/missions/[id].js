import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Layout from "../../components/layout";

export default function Rocket({ rocket }) {
  return <Layout>rocket</Layout>;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query LaunchesPast {
        launchesPast {
          id
        }
      }
    `,
  });

  const paths = data.launchesPast.map((launch) => ({
    params: { id: launch.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Rocket {
        launch(id: ${params.id}) {
          rocket {
            rocket_name
            rocket_type
          }
        }
      }
    `,
  });

  return { props: { rocket: data.launch.rocket } };
}

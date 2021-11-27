import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Layout from "../../components/layout";
import Mission from "../../components/mission";

export default function Missions({ launchesPast }) {
  return (
    <Layout>
      {launchesPast.map((launch) => (
        <Mission key={launch.id} launch={launch} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query LaunchesPast {
        launchesPast {
          id
          mission_name
          launch_year
          launch_success
          launch_site {
            site_name
          }
          links {
            mission_patch_small
          }
        }
      }
    `,
  });

  return {
    props: {
      launchesPast: data.launchesPast,
    },
  };
}

import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";

import Layout from "../components/layout";

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/missions");
  };

  return (
    <Layout>
      <Button color="primary" variant="outlined" onClick={handleClick}>
        EXPLORE SPACE X MISSIONS
      </Button>
    </Layout>
  );
}

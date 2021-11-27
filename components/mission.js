import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const DEFAULT_TEXT = "Unknown";

export default function Mission({ launch }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/missions/${launch.id}`);
  };

  return (
    <Grid item xs={3}>
      <Card style={{ height: "100%" }}>
        <CardActionArea style={{ height: "100%" }} onClick={handleClick}>
          <img
            src={launch.links?.mission_patch_small ?? "/imageNotFound.jpg"}
            style={{ width: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {launch.mission_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Launch year: {launch.launch_year ?? DEFAULT_TEXT}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Success: {launch.launch_success?.toString() ?? DEFAULT_TEXT}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Site: {launch.launch_site.site_name ?? DEFAULT_TEXT}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

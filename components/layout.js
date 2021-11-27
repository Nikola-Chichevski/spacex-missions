import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

export default function Layout({ children }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClick}>
              <HomeIcon />
            </IconButton>
            <Typography variant="h6">Space X Missions</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        item
        xs={12}
      >
        {children}
      </Grid>
    </Grid>
  );
}

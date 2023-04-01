import {
  Box,
  Drawer,
  Grid,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [state, setState] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      // setState(!state);
      // return;
      () => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }
      };
      setState(open);
    };
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container>
        <Grid item xs={2} lg={0.5} sm={1}>
          <React.Fragment>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
              BlablaBlablaBlablaBlabla
            </Drawer>
          </React.Fragment>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Typography fontStyle={"italic"} fontSize={"25px"}>
            AxGPT
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

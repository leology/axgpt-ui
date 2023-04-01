import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { SvgIconComponent } from "@mui/icons-material";

const TitleBanner = (props: TitleBannerProps) => {
  return (
    <Box padding={3}>
      <Grid
        container
        spacing={3}
        paddingLeft={8}
        paddingRight={8}
        direction={"row"}
        marginTop={3}
      >
        <Grid item marginRight={"auto"} lg={3} md={3}>
          <Box marginBottom={2}>
            <Typography
              fontSize="55px"
              fontFamily={"libre-baskerville"}
              lineHeight={1}
            >
              {props.title}
            </Typography>
          </Box>
          <Box>
            <Typography fontStyle={"italic"}>{props.description}</Typography>
          </Box>
        </Grid>
        <Grid item marginLeft={"auto"}>
          {React.createElement(props.icon, {
            color: "primary",
            sx: {
              fontSize: "200px",
            },
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleBanner;

interface TitleBannerProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

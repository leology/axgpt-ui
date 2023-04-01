import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "@fontsource/libre-baskerville";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import TitleBanner from "@/commons/components/TitleBanner";
import FormContainer from "@/commons/components/FormContainer";

const index = () => {
  return (
    <>
      <TitleBanner
        title={"Ask Me Anything"}
        description={
          "Upload a document of choice and converse with it by asking questions."
        }
        icon={ForumOutlinedIcon}
      />
      <FormContainer />
    </>
  );
};

export default index;

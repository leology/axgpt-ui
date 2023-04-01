import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const FormContainer = () => {
  const [filename, setFilename] = useState("");
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setFilename(name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      if (!evt?.target?.result) {
        return;
      }
      const { result } = evt.target;
      console.log(result);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <Box
      sx={{ border: "1px solid #97144D", borderRadius: "6px" }}
      padding={3}
      marginLeft={11}
      marginRight={12}
    >
      <Grid container spacing={3}>
        <Grid item lg={7} md={7}>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <Stack spacing={3} direction={"row"}>
                <Button
                  component="label"
                  startIcon={<FileUploadOutlinedIcon />}
                  variant="contained"
                  size="large"
                  sx={{ height: "55px", borderRadius: "10px" }}
                >
                  Upload
                  <input type="file" hidden onChange={handleUpload} />
                </Button>
                <TextField
                  label="Doucment Name"
                  value={filename}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Stack>
            </Grid>
            <Grid item>
              <TextField label="Question" sx={{ width: "100%" }}></TextField>
            </Grid>
            <Grid item>
              <TextField
                label="Answer"
                sx={{ width: "100%" }}
                multiline
              ></TextField>
            </Grid>
            <Grid item>
              <Stack direction={"row"} spacing={3} justifyContent={"flex-end"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#B1B1B1",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ height: "100%", borderRadius: "10px" }}
                >
                  Submit
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5} md={5}>
          <Card sx={{ height: "100%", backgroundColor: "#F8A7C6" }}>
            <CardHeader
              action={<LightbulbOutlinedIcon fontSize="large" />}
              title={
                <Typography fontStyle={"italic"}>
                  What's in the document?
                </Typography>
              }
            />
            <CardContent>
              <Typography>Summary here</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormContainer;

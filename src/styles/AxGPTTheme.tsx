import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import React from "react";

export const AxGPTTheme = (props: AxGPTThemeProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

interface AxGPTThemeProps {
  children: React.ReactNode | React.ReactNode[];
  theme: Theme;
}

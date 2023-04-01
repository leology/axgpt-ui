import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#97144D",
    },
    secondary: {
      main: "#F8A7C6",
    },
    success: {
      main: "#00A407",
    },
    mode: "light",
  },

  typography: {
    fontFamily: ["Lato", "sans-serif", "Libre Baskerville", "serif"].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "text",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
          fontSize: 16,
          padding: "6px 30px",
          borderRadius: 9,
          lineHeight: 1.5,
        },
      },
    },
    // MuiSwitch: {
    //   styleOverrides: {
    //     root: {
    //       width: 34,
    //       margin: 10,
    //       height: 19,
    //       padding: 0,
    //       display: "flex",
    //       "&:active": {
    //         "& .MuiSwitch-thumb": {
    //           width: 15,
    //         },
    //         "& .MuiSwitch-switchBase.Mui-checked": {
    //           transform: "translateX(9px)",
    //         },
    //       },
    //       "& .MuiSwitch-switchBase": {
    //         padding: 2,
    //         "&.Mui-checked": {
    //           transform: "translateX(15px)",
    //           color: "#fff",
    //           "& + .MuiSwitch-track": {
    //             opacity: 1,
    //             // backgroundColor:
    //             //   this.theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
    //           },
    //         },
    //       },
    //       "& .MuiSwitch-thumb": {
    //         boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    //         width: 15,
    //         height: 15,
    //         borderRadius: 10,
    //         // transition: theme.transitions.create(["width"], {
    //         //   duration: 200,
    //         // }),
    //       },
    //       "& .MuiSwitch-track": {
    //         borderRadius: 20 / 2,
    //         opacity: 1,
    //         // backgroundColor:
    //         //   theme.palette.mode === "dark"
    //         //     ? "rgba(255,255,255,.35)"
    //         //     : "rgba(0,0,0,.25)",
    //         boxSizing: "border-box",
    //       },
    //     },
    //   },
    // },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //       @font-face {
    //         font-family: 'Lato';
    //         src:  url('/fonts/lato-regular.woff2?#iefix') format('woff2'), url('/fonts/lato-regular.woff') format('woff'), url('/fonts/lato-regular.ttf') format('truetype');
    //         font-weight: normal;
    //         font-style: normal;
    //       }

    //        @font-face {
    //         font-family: 'Lato-Italic';
    //         src:  url('/fonts/lato-italic.woff2?#iefix') format('woff2'), url('/fonts/lato-italic.woff') format('woff'), url('/fonts/lato-italic.ttf') format('truetype');
    //         font-weight: normal;
    //         font-style: normal;
    //       }

    //       @font-face {
    //         font-family: 'Lato-Bold';
    //         src:  url('/fonts/lato-bold.woff2?#iefix') format('woff2'), url('/fonts/lato-bold.woff') format('woff'), url('/fonts/lato-bold.ttf') format('truetype');
    //         font-weight: normal;
    //         font-style: normal;
    //       }
    //     `,
    // },
  },
});

export default baseTheme;

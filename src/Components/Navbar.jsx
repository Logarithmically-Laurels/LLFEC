import React from "react";
import { Container, Typography } from "@mui/material";
import NavSearch from "./NavbarSearch.jsx";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./Reviews/review.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navbar = ({darkTheme, changeTheme}) => {
  const logoTheme = createTheme({
    typography: {
      fontFamily: ['"Mukta"', "sans-serif"].join(","),
    },
  });

  return (

    <>
      <AppBar
        position="static"
        maxWidth={false}
        sx={{
          height: "110px",
          backgroundColor: "black",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-testid="navBarLogo"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "2000px",
            minWidth: "90vw",
          }}
        >
          <ThemeProvider theme={logoTheme}>
            <h1 className="mainLogo">Laurel Outfitters</h1>
          </ThemeProvider>
          <NavSearch darkTheme={darkTheme} changeTheme={changeTheme}/>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          my: 1,
        }}
      >
        <Typography
          variant="caption"
          style={{
            backgroundColor: "FBEEC1",
            color: "#FFFFFF",
          }}
        >
          SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT OFFER -- NEW
          PRODUCT HIGHLIGHT
        </Typography>
      </Container>
    </>
  );
};

export default Navbar;

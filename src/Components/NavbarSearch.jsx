import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Stack from '@mui/material/Stack';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavSearch = ({ darkTheme, changeTheme }) => {
  return (

    <Stack spacing={2} direction="row" container="true" padding="2%" justifyContent="center" alignItems="center">
      <Search
        disableGutters
        wrap="nowrap"
        sx={{
          display: "flex",
          width: "15%",
          mr: 0,
          justifyContent: "right",
          backgroundColor: "inherit",
        }}
        >
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

      </Search>
      {darkTheme === 'light' && <NightsStayIcon onClick={(e) => { changeTheme(e) }} />}
      {darkTheme === 'dark' && <Brightness7Icon onClick={(e) => { changeTheme(e) }} />}
    </Stack>
  );
};

export default NavSearch;

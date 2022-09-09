import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, InputAdornment, Input, InputLabel, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));

const Search = ({onSearchChange}) => {
  return (
        <Grid>
          <Grid item xs={12}>
            <CssTextField focusColor="black" variant="outlined" size="large" fullWidth label="HAVE A QUESTION? SEARCH FOR ANSWERS" style={{maxWidth: 1450, width: 1370}} onChange={onSearchChange} InputProps={{endAdornment: (
              <InputAdornment position="end">
                  <SearchIcon />
              </InputAdornment>
            )}}></CssTextField>
          </Grid>
        </Grid>
  )
}

export default Search;
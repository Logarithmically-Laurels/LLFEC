import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, InputAdornment, Input, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({onSearchChange}) => {
  return (
        <Grid>
          <Grid item xs={12}>
            <TextField size="large" fullWidth label="HAVE A QUESTION? SEARCH FOR ANSWERS" style={{width: 1150}} onChange={onSearchChange} InputProps={{endAdornment: (
              <InputAdornment position="end">
                  <SearchIcon />
              </InputAdornment>
            )}}></TextField>
          </Grid>
        </Grid>
  )
}

export default Search;
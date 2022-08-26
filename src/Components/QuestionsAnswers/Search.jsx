import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField } from "@mui/material";

const Search = () => {
  return (
      <form>
        <Grid>
          <Grid item xs={12}>
            <TextField size="small" fullWidth placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS" style={{width: 900}}></TextField>
            <Button variant="contained">SEARCH</Button>
          </Grid>
        </Grid>
      </form>
  )
}

export default Search;
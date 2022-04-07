import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import LazyLoad from "react-lazyload";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import CardRepresentation from "./CardRepresentation";
import { useTitle } from "../utils";

import m_data from "../../data/movies.json";

function ImagesSection() {
  useTitle("Masters_1 | Tagging");
  const [data, setData] = useState(m_data);
  const [openSnack, setOpenSnack] = useState(false);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = (key: number, imgValue: string) => {
    const new_data = data.filter((dat) => dat.imgTitle !== imgValue);
    setOpenSnack(true);
    setData(new_data);
  };

  const snackClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpenSnack(false);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" mt={3} spacing={2}>
          {data.map((dat, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <LazyLoad once offset={100} height="100%">
                {<CardRepresentation handleClick={handleClick} {...dat} />}
              </LazyLoad>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={500}
        onClose={snackClose}
      >
        <Alert severity="success">Tagged 👍</Alert>
      </Snackbar>
    </>
  );
}

export default ImagesSection;

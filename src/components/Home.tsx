import React, { useState } from "react";
import Container from "@mui/material/Container";
import LazyLoad from "react-lazyload";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import CardRepresentation from "./CardRepresentation";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ImagesSection({ fetch_images, my_tags }: any) {
  const [data, setData] = useState(fetch_images.results);
  const [openSnack, setOpenSnack] = useState(false);
  const [count, setCount] = useState(0);
  const [noData, setNoData] = useState(false);

  const handleNext = async () => {
    setCount(count + 20);
    await axios
      .get(`https://web-api-collect.herokuapp.com/images/?offset=${count}`)
      .then((images) => {
        if (images.data.results.length === 0) {
          setNoData(true);
        }

        setData(images.data.results);
      })
      .catch((err) => console.error(err));
  };

  const handlePrev = async () => {
    setCount(count - 20);
    await axios
      .get(`https://web-api-collect.herokuapp.com/images/?offset=${count}`)
      .then((images) => {
        setData(images.data.results);
        if (images.data.results.length === 0) {
          setNoData(false);
        }
      })
      .catch((err) => console.error(err));
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    console.log(count);
  };

  const handleClick = async (key: number, imgValue: any) => {
    const new_data = data.filter((dat: any) => dat.id !== imgValue);
    const selected = data.filter((dat: any) => dat.id === imgValue)[0];

    setOpenSnack(true);
    try {
      const res = await axios.put(
        `https://web-api-collect.herokuapp.com/images/${selected.id}/`,
        {
          id: selected.id,
          link: selected.link,
          count: selected.count,
          his_tags: selected.his_tags,
          list_tags: [...selected.list_tags, { tags_value: key }],
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }

    if (new_data.length < 1) {
      setCount(count + 20);
      axios(`https://web-api-collect.herokuapp.com/images/?offset=${count}`)
        .then((fromback) => {
          console.log(fromback);

          setData(fromback.data.results);
        })
        .catch((err) => console.error(err));
    }
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
        {noData ? (
          <Grid container justifyContent="center" sx={{ mt: 5 }}>
            <Stack sx={{ width: "60%" }} spacing={2}>
              <Alert variant="outlined" severity="success">
                <Typography
                  variant="h5"
                  color="greenyellow"
                  gutterBottom
                  textAlign="center"
                >
                  You Have Done an amazing Job. Thank you very mush for the
                  help. We love you.
                </Typography>
              </Alert>
            </Stack>
          </Grid>
        ) : (
          <Grid container justifyContent="center" mt={3} spacing={2}>
            {data.map((dat: any, key: any) => (
              <Grid item key={key} xs={12} sm={6} md={3}>
                <LazyLoad once offset={100} height="100%">
                  {
                    <CardRepresentation
                      handleClick={handleClick}
                      my_tags={my_tags}
                      {...dat}
                    />
                  }
                </LazyLoad>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Box sx={{ marginTop: 5, marginBottom: 5 }} alignItems="center">
        <Stack spacing={2}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              <Button
                onClick={handlePrev}
                disabled={count === 0}
                sx={{ textTransform: "none" }}
                size="small"
                variant="outlined"
                color="inherit"
              >
                Prev
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleNext}
                sx={{ textTransform: "none" }}
                size="small"
                variant="outlined"
                color="inherit"
                disabled={noData}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>
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

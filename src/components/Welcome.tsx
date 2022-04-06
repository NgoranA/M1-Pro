import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { GetServerSideProps } from "next";

function Welcome() {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Grid item>
          <Typography
            textAlign="center"
            sx={{ fontSize: "2.5rem" }}
            variant="h5"
            gutterBottom
          >
            You're Welcome !
          </Typography>
        </Grid>
        <Grid item>
          <Typography textAlign="center" variant="body1">
            We are in our research Project and we wish to be able to predict
            information found in images to useful infomations. we seek your help
            to classify these images so that we can make use of this to make
            some amazing data available for you and for our society
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export const getSersideProps: GetServerSideProps = async (contect) => {
  return {
    props: {},
  };
};

export default Welcome;

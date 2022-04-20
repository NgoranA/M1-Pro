import { Container, Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

function Welcome() {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
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
          <Typography textAlign="center" variant="h6" gutterBottom>
            We are Masters 1 students at the University of Ngoa-Ekele, Yaounde
            1. We have as project to make our Cameroon culture quickly
            identified and Learned about through MACHINE LEARNING. To make this
            a success we need your assistance in order to label these images for
            us to use and build an Artificially Intelligent machine that will
            recognize and make our culture known.
          </Typography>
          <Typography variant="h6" textAlign="center" color="white">
            All you have to do is to look at each picture and click a button
            whose label is connected to the outfit on the picture
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Welcome;

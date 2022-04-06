import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardRepresentation from "./CardRepresentation";
import { Container } from "@mui/material";

import { useTitle } from "../utils";

import data from "../../data/movies.json";
import Grid from "@mui/material/Grid";

function ImagesSection() {
  useTitle("Masters_1 | Tagging");

  return (
    <>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" mt={3} spacing={2}>
          {data.map((dat, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              {<CardRepresentation {...dat} />}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ImagesSection;

import React, { useContext, useMemo, useState, createContext } from "react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import { NavBar, Welcome, ImagesSection } from "../src/components/index";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { getSession } from "next-auth/react";
import { useTitle } from "../src/utils";
import axios from "axios";

const Home: NextPage = ({ changeColorContext, fetch_images, my_tags }: any) => {
  console.log(fetch_images);

  useTitle("Masters_1 | Tagging");
  return (
    <Box>
      <NavBar changeColorContext={changeColorContext} />
      <Welcome />
      <ImagesSection fetch_images={fetch_images} my_tags={my_tags} />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const my_tags = await await axios(
    "https://web-api-collect.herokuapp.com/tags/"
  )
    .then((btntags) => {
      return btntags.data.results;
    })
    .catch((err) => console.error(err));

  console.log(my_tags);

  const fetch_images = await axios(
    "https://web-api-collect.herokuapp.com/images/"
  )
    .then((fromback) => {
      return fromback.data;
    })
    .catch((err) => console.error(err));
  return {
    props: { fetch_images, my_tags },
  };
};
export default Home;

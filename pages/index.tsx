import React, { useContext, useMemo, useState, createContext } from "react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import { NavBar, Welcome, ImagesSection } from "../src/components/index";
import { useTheme, ThemeProvider } from "@mui/material/styles";

const Home: NextPage = ({ changeColorContext }: any) => {
  return (
    <Box>
      <NavBar changeColorContext={changeColorContext} />
      <Welcome />
      <ImagesSection />
    </Box>
  );
};

export const getStaticProps = async () => {
  console.log(process.env.MY_NAME);

  return {
    props: {},
  };
};
export default Home;

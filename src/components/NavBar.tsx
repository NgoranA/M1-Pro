import React, { createContext, useContext } from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Grid,
  styled,
  Button,
} from "@mui/material";
import { Link } from "./index";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Brightness7,
  Menu,
  InsertLink,
  Brightness4,
} from "@mui/icons-material";
import TranslateIcon from "@mui/icons-material/Translate";
import { GetServerSideProps, GetStaticProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signOut } from "next-auth/react";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function NavBar({ changeColorContext }: any) {
  const theme = useTheme();
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const colorMode: any = useContext(changeColorContext);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#1e1e1e" : "#041F4F",
          opacity: 0.85,
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
        position="sticky"
        enableColorOnDark
      >
        <Toolbar disableGutters variant="dense">
          <Grid container alignItems="center">
            <Grid item>
              <IconButton
                LinkComponent={Link}
                href="/"
                aria-label="Open drawer"
              >
                <LogoDevIcon
                  fontSize="large"
                  sx={{
                    color:
                      theme.palette.mode === "light" ? "#ffffff" : "#ffffff",
                    opacity: 0.85,
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Image src="/logo.png" height={30} width={150} />
              {/* <Typography
                sx={{
                  color: theme.palette.mode === "light" ? "#1e1e1e" : "#ffffff",
                  opacity: 0.85,
                }}
                variant="h5"
              >
                Our Tag App
              </Typography> */}
            </Grid>
          </Grid>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label="Blog">
            <TranslateIcon
              sx={{
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fbfbfb" : "#ffffff",
              }}
              fontSize="small"
            />
          </IconButton>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <Brightness7
                sx={{
                  color: "#ffffff",
                }}
                fontSize="small"
              />
            ) : (
              <Brightness4
                sx={{
                  color: "#ffffff",
                }}
                fontSize="small"
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Offset /> */}
    </>
  );
}

export default NavBar;

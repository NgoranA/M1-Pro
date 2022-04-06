import React, { createContext, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Grid,
  styled,
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

function NavBar({ changeColorContext }: any) {
  const theme = useTheme();
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const colorMode: any = useContext(changeColorContext);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
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
          <Grid container>
            <Grid item>
              <IconButton aria-label="Open drawer">
                <Menu
                  sx={{
                    color:
                      theme.palette.mode === "light" ? "inherit" : "#ffffff",
                    opacity: 0.85,
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: theme.palette.mode === "light" ? "#1e1e1e" : "#ffffff",
                  opacity: 0.85,
                }}
                variant="h5"
              >
                Our Tag App
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label="Blog">
            {/* <Link
              target="_blank"
              aria-label="Blog"
              rel="noopener noreferrer"
              href={"#"}
              sx={{
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fbfbfb" : "#1e1e1e",
              }}
            > */}
            <TranslateIcon
              sx={{
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fbfbfb" : "inherit",
              }}
              fontSize="small"
            />
            {/* </Link> */}
          </IconButton>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <Brightness7
                sx={{
                  color: "inherit",
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
          <IconButton aria-label="Blog">
            <Link
              target="_blank"
              aria-label="Blog"
              rel="noopener noreferrer"
              href={"#"}
              sx={{
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fbfbfb" : "inherit",
              }}
            >
              <InsertLink fontSize="small" />
            </Link>
          </IconButton>
          <IconButton aria-label="Github">
            <Link
              sx={{
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fbfbfb" : "inherit",
              }}
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
              href={"#"}
            >
              <GitHubIcon fontSize="small" />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export const getStaticProps = async () => {
  console.log(process.env.MY_NAME);

  return {
    props: {},
  };
};
export default NavBar;

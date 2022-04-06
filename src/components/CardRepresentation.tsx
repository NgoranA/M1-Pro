import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import LazyLoad from "react-lazyload";
import { useHover } from "../utils";
import { useTheme } from "@mui/material";
import Image from "next/image";
import { GetServerSideProps } from "next";
import ButtonGroup from "@mui/material/ButtonGroup";

function CardRepresentation({ docResource, imgTitle }: any) {
  const [hover, setHover] = useHover();

  const theme = useTheme();
  const imgLink = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/cover/${imgTitle}`;
  return (
    <>
      <Card
        sx={{
          position: "relative",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          transition: `all 0.2s ease-in-out`,
          backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
        }}
        {...setHover}
      >
        {/* <LazyLoad once={true} height={200} offset={[100, 0]} overflow={true}> */}
        <CardMedia
          component={() => (
            <div>
              <Image
                priority
                src={imgLink}
                height={130}
                width={100}
                layout="responsive"
              />
            </div>
          )}
          sx={{
            transition: `all 0.5s ease-in-out`,
            "&:hover": {
              transform: `scale(1.1)`,
            },
          }}
        />
        {/* </LazyLoad> */}
        <CardContent
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "rgba(20,20,20,0.75)",
            color: "#ccc",
            fontSize: 14,
            fontFamily: "Verdana, Arial, sans-serif",
            maxHeight: "30%",
            textAlign: "center",
            opacity: hover ? 100 : 0,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            transition: `all 0.5s ease-in-out`,
          }}
        >
          <ButtonGroup
            size="small"
            variant="outlined"
            color="inherit"
            fullWidth
            aria-label="small button group"
            sx={{ textTransform: "none" }}
          >
            <Button
              onClick={(e) => {
                console.log(e.currentTarget);
              }}
              sx={{ textTransform: "none" }}
            >
              Baham
            </Button>
            <Button sx={{ textTransform: "none" }}>Bamenda</Button>
            <Button sx={{ textTransform: "none" }}>Bamileke</Button>
            <Button sx={{ textTransform: "none" }}>Sawa</Button>
            <Button sx={{ textTransform: "none" }}>Ewondo</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}

export default CardRepresentation;

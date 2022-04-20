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
import { useHover } from "../utils";
import { useTheme } from "@mui/material";
import Image from "next/image";
import { GetServerSideProps } from "next";
import ButtonGroup from "@mui/material/ButtonGroup";
import LazyLoad from "react-lazyload";
import axios from "axios";

function CardRepresentation({ handleClick, id, link, my_tags }: any) {
  const [hover, setHover] = useHover();

  // const handleClick = (key: number, imgValue: string) => {
  //   console.log(key);
  //   console.log(imgValue);
  // };

  const theme = useTheme();
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
        <CardMedia
          component={() => (
            <div>
              <Image
                priority
                src={link}
                height={120}
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
            {my_tags.map((tag: any) => (
              <Button
                onClick={() => {
                  handleClick(tag.id, id);
                }}
                key={tag.id}
                sx={{ textTransform: "none" }}
              >
                {tag.name}
              </Button>
            ))}
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}

export default CardRepresentation;

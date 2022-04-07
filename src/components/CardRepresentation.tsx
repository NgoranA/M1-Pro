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

function CardRepresentation({ docResource, handleClick, imgTitle }: any) {
  const [hover, setHover] = useHover();

  // const handleClick = (key: number, imgValue: string) => {
  //   console.log(key);
  //   console.log(imgValue);
  // };

  const tags = [
    {
      id: 1,
      label: "Baham",
    },
    {
      id: 2,
      label: "Bamenda",
    },
    {
      id: 3,
      label: "Bamileke",
    },
    {
      id: 4,
      label: "Sawa",
    },
    {
      id: 5,
      label: "Ewondo",
    },
  ];

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
            {tags.map((tag) => (
              <Button
                onClick={() => {
                  handleClick(tag.id, imgTitle);
                }}
                key={tag.id}
                sx={{ textTransform: "none" }}
              >
                {tag.label}
              </Button>
            ))}
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}

export default CardRepresentation;

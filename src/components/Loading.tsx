import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

function Loading({ error }: any) {
  const theme = useTheme();
  return (
    <Box sx={{ paddingTop: 100, textAlign: "center" }}>
      {error ? (
        <Typography component="h6" variant="h6">
          Opps!
        </Typography>
      ) : (
        <CircularProgress
          sx={{
            margin: theme.spacing(2),
            color: theme.palette.mode === "dark" ? "#fbfbfb" : "#333333",
          }}
          size={100}
        />
      )}
    </Box>
  );
}

export default Loading;

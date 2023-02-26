import React from "react";
import { Container, Typography, useTheme } from "@mui/material";

export default function Loading() {
  const theme = useTheme();
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography
        variant="h3"
        color={theme.palette.secondary[200]}
        fontWeight="bold"
      >
        LOADING...
      </Typography>
    </Container>
  );
}

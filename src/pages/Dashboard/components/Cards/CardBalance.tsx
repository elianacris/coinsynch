import { Card, Typography } from "@mui/material";

export const CardBalance = (sx) => {
  return (
    <Card sx={{ ...sx }}>
      <img src="" alt="" />
      <Typography>Balance in US$</Typography>
      <Typography>(approximately)</Typography>
      <Typography>$32,256.56</Typography>
    </Card>
  );
};

import { Card, Typography } from "@mui/material";

export const CardNews = (sx) => {
  return (
    <Card sx={{ ...sx }}>
      <img src="" alt="" />
      <Typography>Balance in US$</Typography>
      <Typography>(approximately)</Typography>
      <Typography>$32,256.56</Typography>
    </Card>
  );
};
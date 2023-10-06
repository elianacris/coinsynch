import { Box, Card, Typography } from "@mui/material";

export const CardBalance = (sx) => {
  return (
    <Card
      sx={{
        width: "330px",
        height: "112px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        p: 2,
        ...sx,
      }}
    >
      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "32px",
            color: "var(--Text-Base, #5D6670)",
          }}
        >
          Balance in US$
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "var(--secondary-500, #8C8A97)",
          }}
        >
          (approximately)
        </Typography>
      </Box>
      <Box
        sx={{
          background: "var(--primary-100, #FFF6E8)",
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          height: "250px",
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "32PX",
            fontWeight: 700,
            lineHeight: "40px",
            color: "var(--Text-Base, #5D6670)",
          }}
        >
          $32,256.56
        </Typography>
      </Box>
    </Card>
  );
};

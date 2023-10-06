import { Box, Card, Typography } from "@mui/material";
import BasicArea from "../Charts/BasicArea";
import icon from "../../../../assets/icon.svg";

export const CardDailyVariation = (sx) => {
  return (
    <Card
      sx={{
        width: "280px",
        height: "112px",
        p: 2,
        display: "flex",
        flexDirection: "row",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14px",
            color: "var(--secondary-500, #8C8A97)",
          }}
        >
          Daily Variation
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            color: "var(--Text-Base, #5D6670)",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img alt="" src={icon} />
          ETH
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "var(--tertiary-700, #149E55)",
          }}
        >
          +5,65%
        </Typography>
      </Box>
      <Box>
        <BasicArea />
      </Box>
    </Card>
  );
};

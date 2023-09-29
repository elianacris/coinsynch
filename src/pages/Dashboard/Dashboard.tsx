import { Box, Typography } from "@mui/material";
import TableDasboard from "./components/Table/Table";
import { CardBalance } from "./components/Cards/CardBalance";
import { CardDailyVariation } from "./components/Cards/CardDailyVariation";
import { CardNews } from "./components/Cards/CardNews";

export const Dashboard = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          // mt: "100px",
          gridColumn: "span 12",
          columnGap: 2,
          p: "32px",
        }}
      >
        <CardBalance sx={{ gridColumn: "span 4" }} />
        <CardDailyVariation sx={{ gridColumn: "span 4" }} />
        <CardNews sx={{ gridColumn: "span 4" }} />

        <TableDasboard />
      </Box>
      <footer
        style={{
          background: "#fff",
          boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          // rowGap: 1,
          gridColumn: "span 12",
          padding: "12px ",
          marginTop: "-10px",
        }}
      >
        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            gridColumn: "span 12",
            textAlign: "center",
          }}
        >
          Copyright © 2022 - All rights reserved
        </Typography>
      </footer>
    </Box>
  );
};

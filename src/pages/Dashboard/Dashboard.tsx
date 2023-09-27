import { Box } from "@mui/material";
import TableDasboard from "./components/Table/Table";
import { CardBalance } from "./components/Cards/CardBalance";
import { CardDailyVariation } from "./components/Cards/CardDailyVariation";
import { CardNews } from "./components/Cards/CardNews";

export const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        rowGap: 1,
        mt: '120px',
        gridColumn: "span 12",
      }}
    >
      <CardBalance sx={{ gridColumn: "span 4" }} />
      <CardDailyVariation sx={{ gridColumn: "span 4" }} />
      <CardNews sx={{ gridColumn: "span 4" }} />

      <TableDasboard />
    </Box>
  );
};

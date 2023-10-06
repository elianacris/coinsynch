import { Box } from "@mui/material";
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
          gridColumn: "span 12",
          columnGap: 2,
          p: "32px",
        }}
      >
        <CardBalance
          sx={{
            gridColumn: {
              xs: "span 2",
              sm: "span 6",
              md: "span 6",
              lg: "span 12",
            },
          }}
        />
        <CardDailyVariation
          sx={{
            gridColumn: {
              xs: "span 2",
              sm: "span 6",
              md: "span 6",
              lg: "span 3",
            },
          }}
        />
        <CardNews
          sx={{
            gridColumn: {
              xs: "span 2",
              sm: "span 6",
              md: "span 6",
              lg: "span 3",
            },
          }}
        />
        <TableDasboard />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

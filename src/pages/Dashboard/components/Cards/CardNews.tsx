import { Box, Card, SxProps, Typography } from "@mui/material";
import icon from "../../../../assets/icon2.svg";
interface Props {
  sx: SxProps;
}

export const CardNews = ({ sx }: Props) => {
  return (
    <Card
      sx={{
        width: "320px",
        height: "143px",
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
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16px",
            color: "var(--Text-Base, #5D6670)",
          }}
        >
          NFT’s NEWS
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14px",
            color: "var(--secondary-500, #8C8A97)",
          }}
        >
          New ElephantX NFT to be lauched!
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14px",
            color: "var(--primary-400, #FFB94F)",
            cursor: "pointer",
          }}
        >
          Read more +
        </Typography>
      </Box>
      <Box>
        <img src={icon} alt="" style={{ height: "143px" }} />
      </Box>
    </Card>
  );
};

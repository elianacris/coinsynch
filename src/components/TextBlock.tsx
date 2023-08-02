import { Typography } from "@mui/material";

interface Props {
  name: string;
}

export const TextBlock = ({ name }: Props) => {
  return (
    <Typography
      variant="h5"
      sx={{
        background: "#FFF6E8",
        color: "#FBAB34",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "32px",
        p: "4px 16px",
        width: "70px",
        borderRadius: "4px",
      }}
    >
      {name}
    </Typography>
  );
};

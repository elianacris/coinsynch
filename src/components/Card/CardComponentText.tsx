import { ReactNode } from "react";
import { Card, SxProps, Typography } from "@mui/material";

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  button: ReactNode;
  sx: SxProps;
}

export const CardComponentText = ({
  title,
  description,
  image,
  subtitle,
  button,
  sx,
}: Props) => {
  return (
    <Card
      sx={{
        borderradius: "6px",
        background: "#FFF",
        ...sx,
      }}
    >
      <img src={image} alt="" />
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
          color: "#FBAB34",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "32px",
          color: "#5D6670",
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        sx={{
          width: "232px",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          color: "#5D6670",
        }}
      >
        {description}
      </Typography>
      {button}
    </Card>
  );
};

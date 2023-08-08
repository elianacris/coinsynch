import { Card, SxProps, Typography } from "@mui/material";
interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  sx?: SxProps;
}
export const CardComponent = ({
  title,
  description,
  image,
  subtitle,
  sx,
}: Props) => {
  return (
    <Card
      sx={{
        p:'24px',
        borderradius: "6px",
        background: "#FFF",
        boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
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
    </Card>
  );
};

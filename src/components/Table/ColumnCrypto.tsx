import { Typography } from "@mui/material";
interface Props {
  title: string;
  image: string;
}
export const ColumnCrypto = ({ title, image }: Props) => {
  return (
    <Typography sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <img src={image} alt="" />
      {title}
    </Typography>
  );
};

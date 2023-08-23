import { IconButton } from "@mui/material";
import iconTable from "../../../../assets/icontable.svg";

export const ButtonTable = () => {
  return (
    <IconButton
      sx={{
        borderRadius: "32px",
        width: "80px",
        padding: "8px 16px",
      }}
    >
      <img src={iconTable} alt={""} />
    </IconButton>
  );
};

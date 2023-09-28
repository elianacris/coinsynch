import { Button } from "@mui/material";

export const ButtonTable = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#149E55",
        color: "#fff",
        borderRadius: "32px",
        width: "80px",
        padding: "8px 16px",
        ":hover": {
          backgroundColor: "#26af64f4",
          color: "#fff",
        },
      }}
    >
      Buy
    </Button>
  );
};

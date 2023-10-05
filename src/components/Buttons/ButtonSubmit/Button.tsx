import { Button } from "@mui/material";
interface ButtonProps {
  name: string;
  onClick?: () => void;
}
const ButtonSubmit = ({ name }: ButtonProps) => {
  return (
    <Button
      type="submit"
      variant={"outlined"}
      sx={{
        minWidth: "384px",
        height: "48px",
        textTransform: "none",
        backgroundColor: "#FBAB34",
        borderRadius: "32px",
        p: "14px, 24px ",
        color: "#FFFFFF",
        ":hover": {
          backgroundColor: "#FBAB34",
          color: "#FFFFFF",
        },
      }}
    >
      {name}
    </Button>
  );
};
export default ButtonSubmit;

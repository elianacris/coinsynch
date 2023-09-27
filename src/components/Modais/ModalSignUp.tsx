import { Box, Button, Checkbox, Typography } from "@mui/material";
import ModalComponent from ".";
import InputPasswordRHF from "../RHF/InputRHFPassword";
import InputRHF from "../RHF/InputRHF";
import { FieldValues, useForm } from "react-hook-form";
import { signUpFormArgs } from "../../pages/Home/validators/signUpSchema";
import "./style.css";
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
interface Props {
  open?: boolean;
  handleClose?: () => void;
}
type FormData = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
};

export const ModalSignUp = ({ open, handleClose }: Props) => {
  const form = useForm<FieldValues | any>(signUpFormArgs);

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <ModalComponent open={open} handleClose={handleClose}>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "38px",
          p: "32px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "29px",
            letterSpacing: "0.18px",
            color: "#5D6670",
          }}
        >
          Sign in to <b className="textColor1">Coin</b>
          <b className="textColor3">Synch</b>
        </Typography>
        <InputRHF
          control={control}
          name="name"
          label="Name"
          placeholder="Name"
          sx={{ width: "384px", height: "48px", mb: "-5px" }}
        />
        <InputRHF
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
          sx={{ width: "384px", height: "48px" }}
        />

        <InputPasswordRHF
          control={control}
          name="password"
          placeholder="Password"
          label="Password"
          sx={{
            width: "384px",
            height: "48px",
          }}
        />

        <InputPasswordRHF
          control={control}
          name="newPassword"
          placeholder="Confirm password"
          label="Confirm password"
          sx={{
            width: "384px",
            height: "48px",
          }}
        />
        <Button
          type="submit"
          variant={"outlined"}
          sx={{
          
            minWidth: "384px",
            height: "48px",
            textTransform: "none",
            backgroundColor: "#FBAB34",
            color: "#FFFFFF",
            borderRadius: "32px",
            p: "14px, 24px ",
            ":hover": {
              backgroundColor: "#FBAB34",
              color: "#FFFFFF",
            },
          }}
        >
          Sign Up
        </Button>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Checkbox sx={{ color: "#FBAB34" }} />
          <Typography
            sx={{
              color: "#5D6670",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16px",
              width: "350px",
            }}
          >
            I have read and accept the
            <b className="privacyPolicy">Privacy Policy</b> and
            <b className="privacyPolicy">Terms of User Sign up.</b>
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
          }}
        >
          Already have and account? <b className="signUpTo">Sign in to</b>
          <b className="textColor2">Coin</b>
          <b className="textColor4">Synch</b>
        </Typography>
      </Box>
    </ModalComponent>
  );
};

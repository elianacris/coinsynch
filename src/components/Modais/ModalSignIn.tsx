import { FieldValues, useForm } from "react-hook-form";
import { Box, Link, Typography } from "@mui/material";

import ModalComponent from ".";
import InputRHF from "../RHF/InputRHF";
import InputPasswordRHF from "../RHF/InputRHFPassword";
import { signInFormArgs } from "../../pages/Home/validators/signInSchema";
import "./style.css";
import ButtonSubmit from "../Buttons/ButtonSubmit/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  open?: boolean;
  handleClose?: () => void;
  goTo: (history: NavigateFunction) => void;
}
type FormData = {
  email: string;
  password: string;
};

export const ModalSignIn = ({ open, goTo, handleClose }: Props) => {
  const history = useNavigate();
  const form = useForm<FieldValues | any>(signInFormArgs);
  const { control, handleSubmit } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
    goTo(history);
    handleClose();
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
          gap: "32px",
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
          name="email"
          label="Email"
          sx={{ width: "384px", height: "48px" }}
          placeholder="Email"
        />
        <InputPasswordRHF
          name="password"
          control={control}
          placeholder="Password"
          label="Password"
          sx={{
            width: "384px",
            height: "48px",
          }}
        />
        <Link
          underline="none"
          sx={{
            color: "#8C8A97",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14px",
            ml: "280px",
            mt: "-10px",
            ":hover": {
              color: "#8C8A97",
            },
          }}
        >
          Forgot password?
        </Link>
        <ButtonSubmit name="Sign In" />

        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
          }}
        >
          Don’t have an account? <b className="signUpTo">Sign up to</b>
          <b className="textColor2">Coin</b>
          <b className="textColor4">Synch</b>
        </Typography>
      </Box>
    </ModalComponent>
  );
};

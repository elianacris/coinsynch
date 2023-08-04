import { Box, Button, Checkbox, Divider, Typography } from "@mui/material";
import ModalComponent from ".";
import InputPasswordRHF from "../RHF/InputRHFPassword";
import InputRHF from "../RHF/InputRHF";
import { FieldValues, useForm } from "react-hook-form";
import { defaultValues } from "../../pages/Home/validators/signUpSchema";

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
  const form = useForm<FieldValues>({
    mode: "all",
    defaultValues: defaultValues,
  });

  const { control, handleSubmit, formState } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <ModalComponent open={open} handleClose={handleClose}>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "29px",
            letterSpacing: "0.18px",
            color: "#FF5E1E",
          }}
        >
          Sign in to <b>Coin</b>
          <b>Synch</b>
        </Typography>
        <InputRHF control={control} name="name" />
        <InputRHF control={control} name="email" />

        <InputPasswordRHF
          name="password"
          control={control}
          sx={{
            width: "326px",
            height: "54px",
          }}
        />

        <InputPasswordRHF
          name="newPassword"
          control={control}
          sx={{
            width: "326px",
            height: "54px",
            mb: "26px",
          }}
        />
      </Box>
      <Button
        type="submit"
        disabled={!formState.isValid}
        variant={"outlined"}
        sx={{
          minWidth: "328px",
          height: "40px",
          mb: "10px",
          ":hover": {
            backgroundColor: "#FF5E1E",
            color: "#FFFFFF",
          },
        }}
      >
        Sign Up
      </Button>
      <Checkbox defaultChecked />
      <Typography>
        I have read and accept the <b>Privacy Policy</b> and
        <b>Terms of User Sign up.</b>
      </Typography>
      <Divider sx={{ width: "336px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 5,
          mt: "10px",
          mb: "10px",
          mr: "74px",
        }}
      >
        <img alt="logo" src={""} style={{ width: "82.56px" }} />
        Already have and account? <b>Sign in to</b> <b>Coin</b>
        <b>Synch</b>
      </Box>
    </ModalComponent>
  );
};

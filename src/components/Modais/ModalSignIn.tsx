import { FieldValues, useForm } from "react-hook-form";
import ModalComponent from ".";
import InputRHF from "../RHF/InputRHF";
import { Box, Button, Divider, Typography } from "@mui/material";
import InputPasswordRHF from "../RHF/InputRHFPassword";
import { defaultValues } from "../../pages/Home/validators/signInSchema";

interface Props {
  open?: boolean;
  handleClose?: () => void;
}
type FormData = {
  email: string;
  password: string;
};

export const ModalSignIn = ({ open, handleClose }: Props) => {
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
          Sign in to CoinSynch
        </Typography>

        <InputRHF control={control} name="email" />

        <InputPasswordRHF
          name="password"
          control={control}
          sx={{
            width: "326px",
            height: "54px",
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
        Sign in
      </Button>
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
        Don’t have an account? Sign up to CoinSynch
      </Box>
    </ModalComponent>
  );
};

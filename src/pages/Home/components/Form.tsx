import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import InputRHF from "../../../components/RHF/InputRHF";
import { emailFormArgs } from "../validators/emailSchema";
interface IFormInputs {
  email: string;
}

export default function Form() {
  const {t} = useTranslation()
  const form = useForm<any>(emailFormArgs);

  const { control, handleSubmit } = form;

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "grid",
        //   gridTemplateColumns: "repeat(6 )",
        //   gridColumn: "span 6",
        rowGap: 2,
      }}
    >
      <InputRHF
        control={control}
        name={"email"}
        placeholder="Email"
        sx={{
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            background: "#fff",
            borderRadius: "5px ",
          },

          color: "#fff",
          zIndex: 600,
        }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          borderRadius: "32px",
          minWidth: "384px",
          p: "14px 24px",
          height: "48px",
          gap: "10px",
          color: "white",
          boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
          ":hover": {
            backgroundColor: " #f5c071f4",
          },
          textTransform: "none",
        }}
      >
        {t("button.subscribe")}
      </Button>
    </Box>
  );
}

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";

const mode: keyof ValidationMode = "all";

export const defaultValues: SignUpTypes = {
  id: "",
  name: "",
  email: "",
  password: "",
  newPassword: "",
};

export const signUpSchemaValidation = yup.object({
  id: yup.string(),
  name: yup.string().required("Digite seu nome"),
  email: yup.string().email("Digite um e-mail válido").required("Digite um e-mail válido"),
  password: yup.string().min(6, "Mínimo de 6 caracteres").required(),
  newPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("As senhas devem ser iguais"),
});

export const signUpFormArgs = {
  mode,
  defaultValues: defaultValues,
  resolver: yupResolver(signUpSchemaValidation),
};

export interface SignUpTypes
  extends yup.InferType<typeof signUpSchemaValidation> {}

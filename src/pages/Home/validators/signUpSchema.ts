import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";
import { SignUpTypes } from "src/models/user-model";

const mode: keyof ValidationMode = "all";

export const defaultValues: SignUpTypes = {
  id: "",
  name: "",
  email: "",
  password: "",
  newPassword: "",
};

export const signInSchemaValidation = yup.object({
  id: yup.string(),
  name: yup.string().required("Digite seu nome"),
  email: yup.string().email("Digite um email válido"),
  password: yup.string().min(6, "Mínimo de 6 caracteres"),
  newPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export const signInFormArgs = {
  mode,
  defaultValues: defaultValues,
  resolver: yupResolver(signInSchemaValidation),
};

export interface SignInTypes
  extends yup.InferType<typeof signInSchemaValidation> {}

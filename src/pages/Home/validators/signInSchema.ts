import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";

const mode: keyof ValidationMode = "all";

export const defaultValues: SignInTypes = {
  email: "",
  password: "",
};

export const signInSchemaValidation = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite um e-mail válido"),
  password: yup.string().min(6, "Mínimo de 6 caracteres").required(),
});

export const signInFormArgs = {
  mode,
  defaultValues: defaultValues,
  resolver: yupResolver(signInSchemaValidation),
};

export interface SignInTypes
  extends yup.InferType<typeof signInSchemaValidation> {}

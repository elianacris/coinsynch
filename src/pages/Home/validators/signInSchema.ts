import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";

const mode: keyof ValidationMode = "all";

export const defaultValues: SignInTypes = {
  email: "",
  password: "",
};

export const signUpSchemaValidation = yup.object({
  email: yup.string().email("Digite um email válido"),
  password: yup.string().min(6, "Mínimo de 6 caracteres"),
});

export const signUpFormArgs = {
  mode,
  defaultValues: defaultValues,
  resolver: yupResolver(signUpSchemaValidation),
};

export interface SignInTypes
  extends yup.InferType<typeof signUpSchemaValidation> {}

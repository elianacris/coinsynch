import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";

const mode: keyof ValidationMode = "all";

export const emailUserSchemaValidation = yup.object({
  email: yup.string().email("Digite um email válido"),
});

export const emailFormArgs = {
  mode,
  defaultValues: { email: "" },
  resolver: yupResolver(emailUserSchemaValidation),
};

export interface EmailTypes
  extends yup.InferType<typeof emailUserSchemaValidation> {}

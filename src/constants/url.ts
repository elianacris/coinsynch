import { getBaseUrl } from "src/domain/getEnvVarOrThrow"

export interface BASE_URL {
  url: string
}

export const BASE_URL = getBaseUrl()

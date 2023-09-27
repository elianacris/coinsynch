const getEnvVar = (key: string) => {
  const envVar = process.env[key];
  if (!envVar) throw new Error(`Missing env var ${key}`);
  return envVar;
};
export const getApiKey = () => getEnvVar("REACT_APP_API_KEY");
export const getBaseUrl = () => getEnvVar("REACT_APP_BASE_URL");

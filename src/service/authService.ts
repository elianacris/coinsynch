import axios from "axios";
import { BASE_URL } from "../constants/url";

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/admin/auth`, {
      email: email,
      password: password,
    });

    const tokenData = parseJwt(res.data.accessToken);
    storeToken(res.data.accessToken);

    return tokenData;
  } catch (error) {
    return error;
  }
};
export const isLogged = (): boolean => {
  return localStorage.getItem("token") ? true : false;
};

export const logout = () => {
  clearToken();
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const storeToken = (token: string) => {
  localStorage.setItem("token", token);
};

const clearToken = () => {
  localStorage.removeItem("token");
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

import { AssetIcon } from "src/models/home-model";
import { BASE_URL } from "../constants/url";
import { client } from "./baseService";

import axios from "axios";
export const instance = axios.create();

export const getAssets = async (): Promise<AssetIcon> => {
  try {
    const res = await client().get(`${BASE_URL}/assets/icons/32`);
    return res.data;
  } catch (error) {
    return;
  }
};

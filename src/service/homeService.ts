import { AssetIcon } from "src/models/home-model";
import { BASE_URL } from "../constants/url";
import { client } from "./baseService";

import axios from "axios";
export const instance = axios.create();

// export const get = async (options?: any) => {
//   try {
//     const res = await client().get(`${BASE_URL}/company`, options)
//     return res.data
//   } catch (error) {
//     return false
//   }
// }

// export const getById = async (
//   id: string
// ): Promise<Company | undefined> => {
//   try {
//     const res = await client().get(`${BASE_URL}/company/${id}`)
//     return res.data
//   } catch (error) {
//     return error
//    }
// }

export const getAssets = async (): Promise<AssetIcon> => {
  try {
    const res = await client().get(`${BASE_URL}/assets/icons/32`);
    return res.data;
  } catch (error) {
    return;
  }
};

// export const deleteById = async (
//   id: string | number
// ): Promise<boolean> => {
//   try {
//     const res = await client().delete(`${BASE_URL}/company/${id}`)
//     return true
//   } catch (error) {
//     return false
//   }
// }

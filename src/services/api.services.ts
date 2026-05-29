import axios, { AxiosResponse } from "axios";

import { getCookieToken } from "@/utils/cookie.util";
import { ApiCallOptions } from "@/type/user.type";

const apiCall = async <T>({
  url,
  method = "GET",
  body = {},
  params = {},
  isAuth = false,
}: ApiCallOptions): Promise<T> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (isAuth) {
      const token = getCookieToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      } else {
        console.warn("No JWT token found in cookies");
      }
    }

    const response: AxiosResponse<T> = await axios({
      url,
      method,
      headers,
      data: body,
      params,
    });

    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

export default apiCall;

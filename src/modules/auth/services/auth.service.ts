import { URL } from "@/constants/config";
import apiCall from "@/services/api.services";
import { handleSaveCookieToken } from "@/utils/cookie.util";
import type {
  CredentialDataType,
  LoginResponseType,
  UserLoginResponseType,
} from "../auth.types";

export const handleAdminLogin = async ({
  email,
  password,
}: CredentialDataType): Promise<UserLoginResponseType> => {
  try {
    const response: LoginResponseType = await apiCall({
      url: `${URL}/auth/admin-login`,
      method: "POST",
      body: { email, password },
    });

    if (response?.success && response?.data?.token) {
      handleSaveCookieToken(response.data.token);
      return {
        success: true,
        message: response.message,
        token: response.data.token,
      };
    }
    return { success: false, message: response?.message ?? "Login failed" };
  } catch (e) {
    return { success: false, message: (e as Error).message };
  }
};

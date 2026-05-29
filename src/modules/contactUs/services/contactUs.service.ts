import { URL } from "@/constants/config";
import apiCall from "@/services/api.services";
import type { ContactUsFormValues, ContactUsResponse } from "../contactUs.types";

export const submitContactUs = async (
  values: ContactUsFormValues,
): Promise<ContactUsResponse> => {
  try {
    return await apiCall<ContactUsResponse>({
      url: `${URL}/contact-us`,
      method: "POST",
      body: values,
    });
  } catch (e) {
    return { success: false, message: (e as Error).message };
  }
};

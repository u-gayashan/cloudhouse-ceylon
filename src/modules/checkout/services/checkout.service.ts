import { URL } from "@/constants/config";
import apiCall from "@/services/api.services";
import type { CartLine } from "@/modules/cart/cart.types";
import type { CheckoutFormValues, CheckoutResponse } from "../checkout.types";

export const submitCheckout = async (
  cart: CartLine[],
  form: CheckoutFormValues,
): Promise<CheckoutResponse> => {
  try {
    return await apiCall<CheckoutResponse>({
      url: `${URL}/checkout`,
      method: "POST",
      body: { cart, form },
    });
  } catch (e) {
    return { success: false, message: (e as Error).message };
  }
};

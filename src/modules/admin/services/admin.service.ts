import { URL } from "@/constants/config";
import apiCall from "@/services/api.services";

export const fetchAdminStats = async () => {
  try {
    return await apiCall<{ posts: number; products: number; orders: number }>({
      url: `${URL}/admin/stats`,
      isAuth: true,
    });
  } catch {
    return { posts: 0, products: 0, orders: 0 };
  }
};

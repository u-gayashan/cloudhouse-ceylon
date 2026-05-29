import { URL } from "@/constants/config";
import apiCall from "@/services/api.services";
import { DropdownType } from "@/type/commen.types";

export const getDropdownData = async (
  endpoint: string,
): Promise<DropdownType[]> => {
  try {
    const response = await apiCall<{ data: DropdownType[] }>({
      url: `${URL}/${endpoint}`,
      method: "GET",
    });
    return response.data ?? [];
  } catch {
    return [];
  }
};

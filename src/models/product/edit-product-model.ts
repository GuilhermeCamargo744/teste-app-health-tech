import { baseRequest } from "@/src/utils/refrash-token-validation/base-request";

export const editProductModel = async (
  id: number,
  payload: {
    description: string;
    discountPercentage: number;
    price: number;
    thumbnail: string;
    title: string;
  }
) => {
  return await baseRequest(`/products/${id}`, "PUT", payload).then(
    (response) => {
      return response;
    }
  );
};

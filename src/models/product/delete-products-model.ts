import { baseRequest } from "@/src/utils/refrash-token-validation/base-request";

export const deleteProductsModel = async (id: number) => {
  return await baseRequest(`/products/${id}`, "DELETE").then((response) => {
    return response;
  });
};

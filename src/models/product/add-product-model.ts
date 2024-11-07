import { baseRequest } from "@/src/utils/refrash-token-validation/base-request";

export const addProductsModel = async (payload: {
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  title: string;
}) => {
  return await baseRequest(`/products/add`, "POST", payload).then(
    (response) => {
      return response;
    }
  );
};

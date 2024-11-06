import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const womensShoesModel = async () => {
  return await baseRequest("/products/category/womens-shoes").then(
    (response) => {
      return response;
    }
  );
};

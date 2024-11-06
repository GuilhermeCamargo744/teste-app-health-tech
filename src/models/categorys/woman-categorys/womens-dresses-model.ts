import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const womensDressesModel = async () => {
  return await baseRequest("/products/category/womens-dresses").then(
    (response) => {
      return response;
    }
  );
};

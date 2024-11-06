import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const womensBagsModel = async () => {
  return await baseRequest("/products/category/womens-bags").then(
    (response) => {
      return response;
    }
  );
};

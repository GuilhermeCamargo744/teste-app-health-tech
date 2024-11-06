import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const womensJewelleryModel = async () => {
  return await baseRequest("/products/category/womens-jewellery").then(
    (response) => {
      return response;
    }
  );
};

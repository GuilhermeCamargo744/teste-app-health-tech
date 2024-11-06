import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const mensShirtsModel = async () => {
  return await baseRequest("/products/category/mens-shirts").then(
    (response) => {
      return response;
    }
  );
};

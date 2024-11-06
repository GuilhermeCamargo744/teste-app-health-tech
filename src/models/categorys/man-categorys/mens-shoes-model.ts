import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const mensShortsModel = async () => {
  return await baseRequest("/products/category/mens-shoes").then((response) => {
    return response;
  });
};

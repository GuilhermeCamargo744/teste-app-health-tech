import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const mensWatchesModel = async () => {
  return await baseRequest("/products/category/mens-watches").then(
    (response) => {
      return response;
    }
  );
};

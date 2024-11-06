import { baseRequest } from "./../../../utils/refrash-token-validation/base-request";

export const womensWatchesModel = async () => {
  return await baseRequest("/products/category/womens-watches").then(
    (response) => {
      return response;
    }
  );
};

import { IProductsData } from "./store/slices/products-data/interface-products-data";

export const formatProductsGroupByCategory = (
  items: IProductsData[] | null | [] | any
) => {
  const groupedData =
    items &&
    items?.reduce((acc, item: IProductsData) => {
      if (!acc[item?.category]) {
        acc[item?.category] = [];
      }
      acc[item?.category].push(item);
      return acc;
    }, {});

  return Object.keys(groupedData).map((category) => ({
    title: category,
    data: groupedData[category].filter((item) => !item.isDeleted),
  }));
};

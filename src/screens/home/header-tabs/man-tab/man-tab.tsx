import { useAppSelector } from "@/src/hooks/use-redux";
import { formatProductsGroupByCategory } from "@/src/utils/format-products-group-by-category";
import { ListProducts } from "@/src/components/list-products/list-products";

export const ManTab = () => {
  const mansProducts = useAppSelector(
    (state) => state.productsData.manProducts
  );

  const formatedData = formatProductsGroupByCategory(mansProducts);

  return <ListProducts formatedData={formatedData} />;
};

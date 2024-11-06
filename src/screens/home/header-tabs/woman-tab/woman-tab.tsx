import { ListProducts } from "@/src/components/list-products/list-products";
import { useAppSelector } from "@/src/hooks/use-redux";
import { formatProductsGroupByCategory } from "@/src/utils/format-products-group-by-category";

export const WomanTab = () => {
  const womanProducts = useAppSelector(
    (state) => state.productsData.womanProducts
  );
  const formatedData = formatProductsGroupByCategory(womanProducts);

  return <ListProducts formatedData={formatedData} />;
};

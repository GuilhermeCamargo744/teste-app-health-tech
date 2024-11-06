import { useProductDetails } from "./use-product-details";
import { ProdutcDetailsView } from "./view/product-details-view";

const ProductDetails = () => {
  const {
    detailsProduct,
    currentIndex,
    setCurrentIndex,
    theme,
    width,
    setOpenModal,
    openModal,
    handleDeleteItem,
  } = useProductDetails();

  return (
    <ProdutcDetailsView
      detailsProduct={detailsProduct}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      theme={theme}
      width={width}
      setOpenModal={setOpenModal}
      openModal={openModal}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default ProductDetails;

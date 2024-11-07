import { Stack } from "expo-router";
import { useEditCreateProduct } from "./use-edit-create-product";
import { EditCreateProductView } from "./view/edit-create-product";

const EditCreateProduct = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    theme,
    isAdd,
    openModal,
    setOpenModal,
  } = useEditCreateProduct();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: isAdd ? "Adicionar produto" : "Editar produto",
          headerTitleStyle: {
            fontFamily: theme.fonts.medium,
            fontSize: theme.fontSizes.xxl,
          },
          headerTitleAlign: "left",
        }}
      />
      <EditCreateProductView
        isAdd={isAdd}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        theme={theme}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default EditCreateProduct;

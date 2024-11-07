import EditCreateProduct from "@/src/screens/details/edit-create-product";
import { Stack } from "expo-router";
import { useTheme } from "styled-components";

export default function EditCreateProductScreen() {
  const theme = useTheme();

  return (
    <>
      <EditCreateProduct />
    </>
  );
}

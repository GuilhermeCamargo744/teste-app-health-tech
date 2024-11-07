import { FormEditCreateProduct } from "@/src/components/form-edit-create-product/form-edit-create-product";
import { Container, ContentKeyboardView } from "./styles";
import { IEditPorduct } from "../interface-edit-create-product";
import { ButtonDefault } from "@/src/components/button-default/button-default";
import { ModalEditCreateProduct } from "@/src/components/modal-edit-product/modal-edit-product";

export const EditCreateProductView = ({
  control,
  handleSubmit,
  onSubmit,
  isAdd,
  openModal,
  setOpenModal,
}: IEditPorduct) => {
  const handleSave = isAdd ? handleSubmit(onSubmit) : () => setOpenModal(true);
  return (
    <ContentKeyboardView behavior="padding">
      <Container
        contentContainerStyle={{
          paddingBottom: 70,
        }}
      >
        <FormEditCreateProduct control={control} />
      </Container>
      <ButtonDefault
        onPress={handleSave}
        title="Salvar"
        styleContent={{
          bottom: 35,
        }}
      />
      <ModalEditCreateProduct
        visible={openModal}
        titleHeader="Editar produto"
        isDelete={false}
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={handleSubmit(onSubmit)}
      />
    </ContentKeyboardView>
  );
};

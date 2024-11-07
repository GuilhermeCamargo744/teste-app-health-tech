import { FormEditCreateProduct } from "@/src/components/form-edit-create-product/form-edit-create-product";
import * as S from "./styles";
import { IEditPorduct } from "../interface-edit-create-product";
import { ButtonDefault } from "@/src/components/button-default/button-default";
import { ModalEditCreateProduct } from "@/src/components/modal-edit-create-product/modal-edit-create-product";

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
    <S.ContentKeyboardView behavior="padding">
      <S.Container
        contentContainerStyle={{
          paddingBottom: 70,
        }}
      >
        <FormEditCreateProduct control={control} />
      </S.Container>
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
    </S.ContentKeyboardView>
  );
};

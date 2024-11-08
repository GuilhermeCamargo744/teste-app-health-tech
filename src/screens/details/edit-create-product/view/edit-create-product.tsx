import { FormEditCreateProduct } from "@/src/components/form-edit-create-product/form-edit-create-product";
import * as S from "./styles";
import { IEditPorduct } from "../interface-edit-create-product";
import { ButtonDefault } from "@/src/components/buttons/button-default/button-default";
import { CustomModal } from "@/src/components/modals/custom-modal/custom-modal";

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
      <CustomModal
        visible={openModal}
        titleHeader="Editar produto"
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={handleSubmit(onSubmit)}
        description="Você tem certeza que deseja editar esse produto? Essa ação não poderá ser desfeita."
        titleButton="Editar"
      />
    </S.ContentKeyboardView>
  );
};

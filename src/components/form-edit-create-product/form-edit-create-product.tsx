import { Controller } from "react-hook-form";
import { InputWithTitle } from "../input-with-title/input-with-title";
import * as S from "./styles";
import { IFormEditCreateProduct } from "./interface-form-edit-create-product";
import { mookListForm } from "./mook-list-form";

export const FormEditCreateProduct = ({ control }: IFormEditCreateProduct) => {
  return (
    <S.Container>
      {mookListForm.map((item, index) => {
        return (
          <S.ContentForm key={index}>
            <Controller
              control={control}
              name={item.name}
              rules={{
                required: item.required ? item.required : false,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => {
                return (
                  <InputWithTitle
                    onChangeText={onChange}
                    title={item.title}
                    value={value}
                    styleContainer={{ marginTop: 24 }}
                    onBlur={onBlur}
                    error={error}
                    keyboardType={item.keyboardType}
                  />
                );
              }}
            />
          </S.ContentForm>
        );
      })}
    </S.Container>
  );
};

import { KeyboardTypeOptions } from "react-native";

interface IMookListForm {
  name: string;
  title: string;
  required?: string;
  keyboardType: KeyboardTypeOptions | undefined;
}

export const mookListForm: IMookListForm[] = [
  {
    name: "title",
    title: "Nome",
    required: "Nome do produto é obrigatório",
    keyboardType: "default",
  },
  {
    name: "description",
    title: "Descrição",
    required: "Descrição do produto é obrigatória",
    keyboardType: "default",
  },
  {
    name: "price",
    title: "Preço (R$)",
    required: "Preço do produto é obrigatório",
    keyboardType: "number-pad",
  },
  {
    name: "discountPercentage",
    title: "Desconto (%)",
    required: "Desconto do produto é obrigatório",
    keyboardType: "number-pad",
  },
  {
    name: "thumbnail",
    title: "URL da imagem",
    required: "URL da imagem é obrigatório",
    keyboardType: "default",
  },
];

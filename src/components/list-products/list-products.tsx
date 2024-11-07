import { FlatList } from "react-native";
import * as S from "./styles";

import { IListProducts } from "./interface-list-products";
import { CardItemList } from "./card-item-list";

export const ListProducts = ({ formatedData }: IListProducts) => {
  return (
    <FlatList
      data={formatedData}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => {
        return (
          <S.ContentList>
            <S.Title>{item.title.replace("-", " ").toUpperCase()}</S.Title>
            <FlatList
              data={item.data}
              keyExtractor={(subItem) => String(subItem.id)}
              numColumns={2}
              renderItem={({ item }) => {
                return <CardItemList item={item} />;
              }}
            />
          </S.ContentList>
        );
      }}
    />
  );
};

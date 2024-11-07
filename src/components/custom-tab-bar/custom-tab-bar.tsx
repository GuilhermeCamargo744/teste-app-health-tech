import { ICustomTabBar } from "./interface-custom-tab-bar";
import * as S from "./styles";

export const CustomTabBar = ({ props, setIndex, index }: ICustomTabBar) => {
  return (
    <S.Container>
      {props?.navigationState?.routes &&
        props?.navigationState?.routes.map((item, i) => {
          return (
            <S.ButtonTab
              currentIndex={index == i}
              onPress={() => setIndex(i)}
              key={i}
            >
              <S.TitleTab>
                {item.title == "First"
                  ? "Produtos Masculinos"
                  : "Produtos Femininos"}
              </S.TitleTab>
            </S.ButtonTab>
          );
        })}
    </S.Container>
  );
};

import { ICustomTabBar } from "./interface-custom-tab-bar";
import { ButtonTab, Container, TitleTab } from "./styles";

export const CustomTabBar = ({ props, setIndex, index }: ICustomTabBar) => {
  return (
    <Container>
      {props?.navigationState?.routes &&
        props?.navigationState?.routes.map((item, i) => {
          return (
            <ButtonTab
              currentIndex={index == i}
              onPress={() => setIndex(i)}
              key={i}
            >
              <TitleTab>
                {item.title == "First"
                  ? "Produtos Masculinos"
                  : "Produtos Femininos"}
              </TitleTab>
            </ButtonTab>
          );
        })}
    </Container>
  );
};

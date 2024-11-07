import { TabView } from "react-native-tab-view";
import { IUseHome } from "../interface/interface-use-home";
import { SafeAreaView } from "react-native";
import { CustomTabBar } from "@/src/components/custom-tab-bar/custom-tab-bar";
import { LoadingModal } from "@/src/components/loading-modal/loading-modal";
import * as S from "./styles";
import { router } from "expo-router";

export const HomeView = ({
  index,
  layout,
  renderScene,
  routes,
  setIndex,
  theme,
  loading,
}: IUseHome) => {
  if (loading) {
    return <LoadingModal visible={loading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <CustomTabBar props={props} setIndex={setIndex} index={index} />
        )}
      />
      <S.FloatingButton
        icon="plus"
        onPress={() =>
          router.navigate({
            pathname: "/(screens)/(details)/edit-create-product",
            params: { isAdd: 1, currentTab: index },
          })
        }
        color={theme.colors.white}
      />
    </SafeAreaView>
  );
};

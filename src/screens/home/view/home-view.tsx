import { TabView } from "react-native-tab-view";
import { IUseHome } from "../interface/interface-use-home";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { CustomTabBar } from "@/src/components/custom-tab-bar/custom-tab-bar";
import { LoadingModal } from "@/src/components/loading-modal/loading-modal";

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
    </SafeAreaView>
  );
};

import { NavigationState, SceneRendererProps } from "react-native-tab-view";

export interface ICustomTabBar {
  props: SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
  };
  setIndex: (value: number) => void;
  index: number;
}

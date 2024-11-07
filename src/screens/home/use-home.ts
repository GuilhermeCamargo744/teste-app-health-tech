import { useAppDispatch } from "@/src/hooks/use-redux";
import { mensWatchesModel } from "@/src/models/categorys/man-categorys/mens-watches-model";
import { womensBagsModel } from "@/src/models/categorys/woman-categorys/womens-bags-model";
import { womensDressesModel } from "@/src/models/categorys/woman-categorys/womens-dresses-model";
import { womensJewelleryModel } from "@/src/models/categorys/woman-categorys/womens-jewellery-model";
import { womensShoesModel } from "@/src/models/categorys/woman-categorys/womens-shoes-model";
import { womensWatchesModel } from "@/src/models/categorys/woman-categorys/womens-watches-model";
import {
  setManProducts,
  setWomanProducts,
} from "@/src/utils/store/slices/products-data/products-data";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap } from "react-native-tab-view";
import { useTheme } from "styled-components";
import { mensShirtsModel } from "./../../models/categorys/man-categorys/mens-shirts-model";
import { mensShortsModel } from "./../../models/categorys/man-categorys/mens-shoes-model";
import { ManTab } from "./header-tabs/man-tab/man-tab";
import { WomanTab } from "./header-tabs/woman-tab/woman-tab";
import { useLocalSearchParams } from "expo-router";
import { useRefreshToken } from "@/src/utils/react-query/automatic-refrash-token";

export const useHome = () => {
  const { data } = useRefreshToken();
  const params = useLocalSearchParams();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    first: ManTab,
    second: WomanTab,
  });

  useEffect(() => {
    if (Number(params.canRequest) != 0) {
      requestAllApis();
    }
  }, []);

  const requestAllApis = async () => {
    setLoading(true);
    await Promise.all([
      mensShortsModel(),
      mensShirtsModel(),
      mensWatchesModel(),
      womensBagsModel(),
      womensDressesModel(),
      womensJewelleryModel(),
      womensShoesModel(),
      womensWatchesModel(),
    ])
      .then((resp) => {
        if (resp[0].products) {
          dispatch(setManProducts(resp[0].products));
        }
        if (resp[1].products) {
          dispatch(setManProducts(resp[1].products));
        }
        if (resp[2].products) {
          dispatch(setManProducts(resp[2].products));
        }
        if (resp[3].products) {
          dispatch(setWomanProducts(resp[3].products));
        }
        if (resp[4].products) {
          dispatch(setWomanProducts(resp[4].products));
        }
        if (resp[5].products) {
          dispatch(setWomanProducts(resp[5].products));
        }
        if (resp[6].products) {
          dispatch(setWomanProducts(resp[6].products));
        }
        if (resp[7].products) {
          dispatch(setWomanProducts(resp[7].products));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    renderScene,
    setIndex,
    index,
    routes,
    layout,
    theme,
    loading,
  };
};

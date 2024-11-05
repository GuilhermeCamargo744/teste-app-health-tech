import "styled-components/native";

export const DefaultThemeApp = {
  colors: {
    primary: "#2567E8",
    white: "#FFF",
    gray: "#BDBDBD",
    black: "#000",
    red: "#B91C1C",
    background: "#747474",
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fonts: {
    400: "RobotoRegular",
    600: "RobotoMedium",
    700: "RobotoBold",
  },
};

export type DefaultThemeType = typeof DefaultThemeApp;

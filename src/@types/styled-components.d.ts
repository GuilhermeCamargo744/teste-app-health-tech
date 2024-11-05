/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import type { CSSProp } from "styled-components";
import "styled-components/native";
import { DefaultThemeType } from "../utils/theme";

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeType {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends DefaultThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

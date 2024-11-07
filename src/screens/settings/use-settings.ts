import { useAppSelector } from "@/src/hooks/use-redux";
import { useTheme } from "styled-components";

export const useSettings = () => {
  const { user } = useAppSelector((state) => state.userData);
  const theme = useTheme();

  return {
    userData: user,
    theme,
  };
};

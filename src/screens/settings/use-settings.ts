import { useState } from "react";
import { useAppSelector } from "@/src/hooks/use-redux";
import { useTheme } from "styled-components";

export const useSettings = () => {
  const { user } = useAppSelector((state) => state.userData);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDeveloping, setOpenModalDeveloping] = useState(false);
  const theme = useTheme();

  return {
    userData: user,
    theme,
    setOpenModal,
    openModal,
    openModalDeveloping,
    setOpenModalDeveloping,
  };
};

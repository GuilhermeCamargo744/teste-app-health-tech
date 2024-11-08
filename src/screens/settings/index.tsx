import { useSettings } from "./use-settings";
import { SettingsView } from "./view/settings-view";

const Settings = () => {
  const {
    userData,
    theme,
    setOpenModal,
    openModal,
    openModalDeveloping,
    setOpenModalDeveloping,
  } = useSettings();

  return (
    <SettingsView
      userData={userData}
      theme={theme}
      setOpenModal={setOpenModal}
      openModal={openModal}
      openModalDeveloping={openModalDeveloping}
      setOpenModalDeveloping={setOpenModalDeveloping}
    />
  );
};

export default Settings;

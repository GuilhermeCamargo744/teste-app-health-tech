import { useSettings } from "./use-settings";
import { SettingsView } from "./view/settings-view";

const Settings = () => {
  const { userData, theme } = useSettings();

  return <SettingsView userData={userData} theme={theme} />;
};

export default Settings;

import { useAuth } from "./use-auth";
import { AuthView } from "./view/auth-view";

const Auth = () => {
  const { control, handleSubmit, onSubmit } = useAuth();

  return (
    <AuthView
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default Auth;

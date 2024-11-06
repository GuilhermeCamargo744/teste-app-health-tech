import { useAuth } from "./use-auth";
import { AuthView } from "./view/auth-view";

const Auth = () => {
  const { control, handleSubmit, onSubmit, loading, error } = useAuth();

  return (
    <AuthView
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default Auth;

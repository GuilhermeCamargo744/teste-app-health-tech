import { useHome } from "./use-home";
import { HomeView } from "./view/home-view";

const Home = () => {
  const { index, layout, renderScene, routes, setIndex, theme, loading } =
    useHome();

  return (
    <HomeView
      index={index}
      layout={layout}
      renderScene={renderScene}
      routes={routes}
      setIndex={setIndex}
      theme={theme}
      loading={loading}
    />
  );
};

export default Home;

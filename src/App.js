import ScrollTop from "./utils/ScrollTop";
import Routes from "./routes";
import ThemeCustomization from "./themes";

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;

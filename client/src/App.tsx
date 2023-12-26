import Displayoutput from "./components/Displayoutput";
import Inputbar from "./components/Inputbar";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Displayoutput />
        <Inputbar />
      </Provider>
    </div>
  );
};

export default App;

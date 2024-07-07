import { NavContainer } from "./navigators/NavContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavContainer />
    </Provider>
  );
}

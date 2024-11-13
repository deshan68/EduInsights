import { Provider } from "react-redux";
import "./App.css";
import AppHandler from "./app/AppHandler";
import { store } from "./slices/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppHandler />
    </Provider>
  );
}

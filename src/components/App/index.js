import { Provider } from "react-redux";
import store from "../../store";
import AppContent from "./App";

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
};
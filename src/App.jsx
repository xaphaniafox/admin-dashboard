import { RouterProvider } from "react-router-dom";
import router from "./router";
import i18n from "./core/i18n";
function App() {
  return <RouterProvider router={router} />;
}
export default App;

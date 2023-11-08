import "./App.css";
import Layout from "./Components/layout/layout";
import { AddToCartModalProvider } from "./Context/add-to-cart-modal";

function App() {
  return (
    <AddToCartModalProvider>
      <Layout />
    </AddToCartModalProvider>
  );
}

export default App;

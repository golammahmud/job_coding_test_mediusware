import "./App.css";
import ProductContext from "../src/component/context/productcontext"
import Home from "../src/component/pages/products"
export default function App() {
  return (
   
    <ProductContext>
     <Home/>
    </ProductContext>
  );
}

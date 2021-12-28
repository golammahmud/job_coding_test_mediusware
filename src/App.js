import "./App.css";
import Products from "../src/components/products";
import  ProductContext  from "../src/components/productcontext";
import ApiContext from "../src/components/apicontext";
export default function App() {
  return (
    <ApiContext/>
    // <ProductContext>
    //   <Products />
    // </ProductContext>
  );
}

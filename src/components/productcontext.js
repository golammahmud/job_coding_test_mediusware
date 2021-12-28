import { React, createContext, useState, useEffect } from "react";

const loadContext = new createContext();
const ProductContexts = new createContext();
export { ProductContexts, loadContext };

function ProductContext(props) {
  const [isLoading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);




  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } else {
        throw new Error("data not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
   <>
    <ProductContexts.Provider value={[items, setItems]}>
      <loadContext.Provider value={[isLoading, setLoading]}>
        {props.children}
      </loadContext.Provider>
    </ProductContexts.Provider>
   </>
  );
}

export default ProductContext;

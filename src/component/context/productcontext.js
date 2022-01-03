import { React, createContext, useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";

const loadContext = new createContext();
const ProductContexts = new createContext();
const VariantContexts = new createContext();
export { ProductContexts, loadContext, VariantContexts };

function ProductContext(props) {
  // const url = "https://fakestoreapi.com/products";
  const url = "http://127.0.0.1:8000/products/";
  const url2 = "http://127.0.0.1:8000/variants/";
  var headers = {};

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);



  // get products
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: headers,
      });
      if (response.status === 200) {
        const data = await response.json();
        // const {results} = data;
        setItems(data);

        setLoading(false);
      } else {
        throw new Error("data not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  // get products


  //get products variants

  const [variant, setVariant] = useState([]);

  useEffect(() => {
    fetchProductVariant();
  }, []);

  const fetchProductVariant = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/variants/", {
        method: "GET",
        mode: "cors",
        headers: headers,
      });
      if (response.status === 200) {
        const data = await response.json();
        setVariant(data);
        setLoading(false);
      } else {
        throw new Error("product variant not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  //get products variants


  return (
    <>
      <ProductContexts.Provider value={[items, setItems]}>
        <VariantContexts.Provider value={[variant, setVariant]}>
          <loadContext.Provider value={[isLoading, setLoading]}>
            {props.children}
          </loadContext.Provider>
        </VariantContexts.Provider>
      </ProductContexts.Provider>
    </>
  );
}

export default ProductContext;

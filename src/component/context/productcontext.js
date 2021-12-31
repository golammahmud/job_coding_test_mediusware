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
export { ProductContexts, loadContext };

function ProductContext(props) {
  // const url = "https://fakestoreapi.com/products";
  const url = "http://127.0.0.1:8000/products/";
  var headers = {};

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
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
        setItems(data.results);

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

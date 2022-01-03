import { React, useContext, useState, useEffect } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContexts, loadContext } from "../context/productcontext";
import Forms from "./forms";

import Isloading from "../isloading";

import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";
// import Items from "./items";
import Test from  "./test";
function Products() {
  const [items, setItems] = useContext(ProductContexts);
  const [isLoading, setLoading] = useContext(loadContext);
  // const {count}=items;
  // const [currentPage, setCurrentPage] = useState(1);
  // console.log(items);

  return (
    <div>
      <div className="container">
        <h2>Products</h2>
        {/* <Forms /> */}
      </div>

      {isLoading ? (
        <div className="grid justify-items-center align-content-center">
          <Isloading />
        </div>
      ) : (
        <div>
         <Forms />
        </div>
      )}

      <div className="grid justify-items-start">
        <div>Showing 1 to 2 out of  </div>
      </div>
      <div className="grid justify-items-end ">
        {" "}
        <Pagination className="text-right">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item active>{12}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

export default Products;

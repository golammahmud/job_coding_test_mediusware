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

function Items() {
    const [items,setItems] = useContext(ProductContexts);
    const [isLoading, setLoading] = useContext(loadContext);

// console.lo0g(`products: ${product}`);

  return (
    <div>
      <div className=" mx-auto grid grid-col-4 grid-flow-col gap-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Variant</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          {items.map((item,index) => {
            return (
              <>
                <tbody >
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Items;

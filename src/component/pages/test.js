import { React, useContext, useState, useEffect } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContexts, loadContext } from "../context/productcontext";
import Isloading from "../isloading";

import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
} from "react-bootstrap";
function Test() {
  const [items, setItems] = useContext(ProductContexts);
  console.log(items);
  return (
    <div>
      <div>
        <Table responsive striped bordered hover size="xl">
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
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td></td>

                  {item.products.map((val) => {
                    return (
                      <>
                        {" "}
                        <td>
                          <ul>
                            <li>{val.price}</li>
                          </ul>
                        </td>
                        <td>
                          <ul>
                            <li>{val.stock}</li>
                          </ul>
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Test;

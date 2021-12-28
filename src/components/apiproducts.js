import { React, createContext, useState, useEffect,useContext } from "react";
import { ApiContexts, loadContext } from "./apicontext";
import "../index.css";
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
function ApiProduct() {
  const [items, setItems] = useContext(ApiContexts);
  const [isLoading, setLoading] = useContext(loadContext);
  
  console.log(items);

  return (
    <div>
      <div class="bg-slate-300 mx-auto grid grid-col-4 grid-flow-col gap-4">
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
                <tbody key={index}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.created_at}</td>
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
      <div className="grid justify-items-start">
        <div>Showing 1 to 2 out of 7 </div>
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

export default ApiProduct;

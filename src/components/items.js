import { React, useContext, useState, useEffect } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContexts, loadContext } from "./productcontext";
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

function Items() {
  const [items, setItems] = useContext(ProductContexts);
  const [isLoading, setLoading] = useContext(loadContext);
  const [Ratings, setRatings] = useState({});

console.log(items);

  // items.map(item => {
  //     return (
  //     setRating(item.rating)
  //     );
  // });

  return (
    <>
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

          {items.map((item) => {
            return (
              <>
                <tbody key={item.id}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
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
    </>
  );
}

export default Items;

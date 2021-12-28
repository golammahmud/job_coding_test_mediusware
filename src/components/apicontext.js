import { React, createContext, useState, useEffect, useContext } from "react";
// import { ApiContexts, loadContext } from "./apicontext";
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
const loadContext = new createContext();
const ApiContexts = new createContext();
export { ApiContexts, loadContext };

function ApiContext(props) {
  const url = "http://127.0.0.1:8000/products/";
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  var headers = {}
  console.log(items);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      const response = await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
      });
      if (response.status === 200) {
        const data = await response.json();
        setItems(data.results);
        setLoading(false);
      } else {
        throw new Error("data not found");
      }
    } catch (err) {
      err.message = "some thing wrong to fetching the data";
    }
  };

  return (
    <div className="container">
      <h1 className="text-left text-3xl">Products</h1>
      <Form className="mx-auto flex space-x-4  ">
        <Row className="">
          <div className="container mx-auto  flex-row flex space-x-8  ">
            <Col xs={"auto"}>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="h-5 w-5 fill-gray-300"
                    viewBox="0 0 20 20"
                  ></svg>
                </span>
                <input
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Product Title..."
                  type="text"
                  name="search"
                />
              </label>
            </Col>

            <Col xs={"auto"}>
              <Form.Select aria-label="Default select example">
                <option>variant</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col xs={3}>
              <InputGroup className="mb-3">
                <InputGroup.Text>Price</InputGroup.Text>
                <FormControl
                  aria-label="from"
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="From"
                />

                <FormControl
                  aria-label="to"
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="To"
                />
              </InputGroup>
            </Col>

            <Col xs={"auto"}>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="date"
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="yyyy-mm-dd"
                />
              </InputGroup>
            </Col>

            <Col xs="auto">
              <button
                type="submit"
                className="mb-2 bg-slate-100 text-lg border border-x-2 w-12 h-11 rounded-md"
              >
                @
              </button>
            </Col>
          </div>
        </Row>
      </Form>

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

          {items.map((item, index) => {
            return (
              <>
                <tbody key={index}>
                  <tr>
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
          {/* {items.map((item,index) => {
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
          })} */}
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

export default ApiContext;

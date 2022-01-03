import { React, useContext, useState, useEffect } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContexts, loadContext,VariantContexts } from "../context/productcontext";
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
function Forms() {
  const [items, setItems] = useContext(ProductContexts);
  const [variant, setVariant] = useContext(VariantContexts);
  const [isLoading, setLoading] = useContext(loadContext);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const { results: product } = items;

 
 


  useEffect(() => {
    setOutput([]);
    product.filter((val) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
    // setItems(output);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {/* <Form className="mx-auto flex space-x-4  "> */}
      <div className="container">
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
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </label>
            </Col>

            <Col xs={"auto"}>
              <Form.Select aria-label="Default select example">
              <option>variant</option>
                {variant.map((val) => {
                  return (
                    <option key={val.id} value={val.id}>
                      {val.title}
                    </option>
                  );
                })}
                {/* <option>variant</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
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
      </div>
      <div className="container-fluid">
        <Table responsive striped bordered hover size="xl">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Variant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* if condition */}
            {output != null && output.length > 0
              ? output.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>

                      {item.products != null && item.products.length > 0 ? (
                        <>
                          {item.products.map((val) => {
                            return (
                              <Table
                                responsive
                                striped
                                bordered
                                hover
                                size="xl"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <span className="text-md font-bold">
                                        {val.product_variants}
                                      </span>
                                    </td>

                                    <td>
                                      <span className="text-md font-bold">
                                        Price :
                                      </span>
                                      {val.price}
                                    </td>

                                    <td>
                                      <span className="text-md font-bold">
                                        Stock:
                                      </span>
                                      {val.stock}
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            );
                          })}
                        </>
                      ) : (
                        <span className="text-md font-semibold grid justify-center align-content-center">
                          {" "}
                          variants not found
                        </span>
                      )}

                      <td>
                        <Button type="button" className="btn btn-primary">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : product.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>

                      {item.products != null && item.products.length > 0 ? (
                        <>
                          {item.products.map((val) => {
                            return (
                              <Table
                                responsive
                                striped
                                bordered
                                hover
                                size="xl"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <span className="text-md font-bold">
                                        {val.product_variants}
                                      </span>
                                    </td>

                                    <td>
                                      <span className="text-md font-bold">
                                        Price :
                                      </span>
                                      {val.price}
                                    </td>

                                    <td>
                                      <span className="text-md font-bold">
                                        Stock:
                                      </span>
                                      {val.stock}
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            );
                          })}
                        </>
                      ) : (
                        <span className="text-md font-semibold grid justify-center align-content-center">
                          {" "}
                          variants not found
                        </span>
                      )}
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Forms;

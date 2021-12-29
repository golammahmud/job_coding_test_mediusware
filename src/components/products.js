import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import Items from "./items";
import { ProductContexts, loadContext } from "./productcontext";
import { React, useContext, useState } from "react";

export default function Products() {
  const [isLoading, setLoading] = useContext(loadContext);
  return (
    <div className="container  ">
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

      {isLoading ? (
        <div className="container mx-auto flex-row flex space-x-4  ">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="spinner-border text-xl font-serif text-slate-500"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        // <div className="container mx-auto flex-row flex space-x-4  ">
        <Items />
        // </div>
      )}

      {/* <Items/> */}
    </div>
  );
}

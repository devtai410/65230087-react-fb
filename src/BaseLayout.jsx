import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Report from "./Report";
import Product from "./Product";
import NoPage from "./NoPage";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">DPU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/report">Home</Nav.Link>
              <Nav.Link href="/product">Products</Nav.Link>
            </Nav>
            <div style={{ color: "white" }}>65230087 วัยวุฒิ ชุมเมืองปัก</div>
          </Container>
        </Navbar>
        <p></p>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Report />} />
                <Route path="report" element={<Report />} />
                <Route path="product" element={<Product />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

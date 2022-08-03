/*eslint-disable*/
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import Media from 'react-media';

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Routes>
      {/*  */}
      <Route
        path="/"
        element={
          <div>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="/">Catudy</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/show">Show</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <>
            {/* 상단 NAVBAR */}
            <div className="topBox">
              <Link to="/">
                <div className="main-logo"></div>
              </Link>
            </div>
            {/* 중단 로그인form*/}
            <div className="middle">
              <Form>
                <h1>로그인</h1>

                <Form.Group className="mb-3 loginF" controlId="formBasicEmail">
                  <Form.Label>아이디</Form.Label>
                  <Form.Control type="email" placeholder="아이디" />
                </Form.Group>

                <Form.Group
                  className="mb-3 loginF2"
                  controlId="formBasicPassword"
                >
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control type="password" placeholder="비밀번호" />
                </Form.Group>
                {/* 로그인버튼 */}
                <button className="loginBtn" type="submit">
                  로그인
                </button>

                <div className="loginBox1">아직 회원이 아니신가요?</div>
                {/* 회원가입버튼 */}
                <button className="joinBtn" type="submit">
                  지금 바로 가입하기
                </button>
              </Form>
            </div>
          </>
        }
      />
      <Route
        path="/show"
        element={
          <>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="/">Catudy</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>

                  <Nav.Link href="/show">Show</Nav.Link>
                </Nav>
              </Container>
            </Navbar>

            <div>Show</div>
          </>
        }
      />
    </Routes>
  );
}

export default App;

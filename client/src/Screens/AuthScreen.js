import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AuthScreen = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            {login ? (
              <Form className="align-content-center mt-3">
                <h1 className="text-center mb-3">Giriş Yap</h1>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email adresinizi giriniz"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifrenizi giriniz"
                  ></Form.Control>
                </Form.Group>
                <Button
                  type="submit"
                  className="mt-4"
                  style={{ width: "100%" }}
                >
                  Giriş Yap
                </Button>
                <Form.Text as="large" className="text-center mt-2">
                  Henüz bir hesabınız yok mu?{" "}
                  <span
                    onClick={(e) => setLogin(!login)}
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Hesap Oluştur
                  </span>
                </Form.Text>
              </Form>
            ) : (
              <Form className="align-content-center mt-3">
                <h1 className="text-center mb-3">Kayıt Ol</h1>
                <Form.Group>
                  <Form.Label>Adınız</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adınız"
                    className="mb-3"
                  ></Form.Control>
                  <Form.Label>Soyadınız</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Soyadınız"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email adresinizi girin"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifrenizi girin"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Şifrenizi Doğrulayın</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifrenizi Doğrulayın"
                  ></Form.Control>
                </Form.Group>
                <Button
                  type="submit"
                  className="mt-3"
                  style={{ width: "100%" }}
                >
                  Kayıt Ol
                </Button>
                <Form.Text as="large" className="text-center mt-2">
                  Zaten bir hesabınız var mı?{" "}
                  <span
                    onClick={(e) => setLogin(!false)}
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Giriş Yap
                  </span>
                </Form.Text>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthScreen;

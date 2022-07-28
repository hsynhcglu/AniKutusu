import React from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

const SubmitMemory = () => {
  return (
    <>
      <Form >
        <Form.Group>
          <h1>Bir anı yarat</h1>
        </Form.Group>
        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control name="title" type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Yazar</Form.Label>
          <Form.Control name="author" type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Anı İçeriği</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mt-4">
            <ReactFileBase64 type='file' multiple={false} onDone={() => {}} /> 
        </Form.Group>
        <Button type='submit' className="mt-4">Gönder</Button>
      </Form>
    </>
  );
};

export default SubmitMemory;

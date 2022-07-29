import React, { useState, useEffect } from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";
import { fetchMemory } from "../axios/index.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMemory } from "../actions/MemoryActions.js";

const UpdateMemory = ({ id }) => {
  const dispatch = useDispatch();
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  useEffect(() => {
    const getMemo = async () => {
      const { data } = await fetchMemory(id);
      setMemoryData(data);
    };
    getMemo();
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(updateMemory(id, memoryData));
          navigate("/");
        }}
      >
        <Form.Group>
          <h1>Bir anıyı güncelle</h1>
        </Form.Group>

        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={memoryData.title}
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Yazar</Form.Label>
          <Form.Control
            name="author"
            type="text"
            value={memoryData.creator}
            onChange={(e) =>
              setMemoryData({ ...memoryData, creator: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Anı İçeriği</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            value={memoryData.content}
            rows={3}
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mt-4">
          <ReactFileBase64
            type="file"
            multiple={false}
            value={memoryData.image}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
          />
        </Form.Group>

        <Button type="submit" className="mt-4">
          Gönder
        </Button>
      </Form>
    </>
  );
};

export default UpdateMemory;

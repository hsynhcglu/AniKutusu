import React, { useEffect } from "react";
import { Spinner, Col, Row } from "react-bootstrap";
import Memory from "../components/Memory.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemories } from "../actions/MemoryActions.js";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const memories = useSelector((state) => state.memories);

  useEffect(() => {
    if (!memories[0]) {
      dispatch(fetchMemories());
    }
  }, [dispatch]);

  return (
    <>
      <h1>En Güncel Anılar</h1>
      {!memories.length ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          {memories.map((memory) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="m-auto"
                key={memory._id}
              >
                <Memory memory={memory} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { deleteMemory } from "../axios/index.js";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{color: 'darkblue'}}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title><span style={{color: 'darkblue'}}>Yazar:</span>{memory.creator}</Card.Title>
        <Card.Subtitle> {moment(memory.createdAt).fromNow()} </Card.Subtitle>
      </Card.Body>
      <Card.Footer className="bg-white pb-0" style={{display:'flex', justifyContent: 'space-between'}}>
        <LinkContainer to={`/update/${memory._id}`} style={{ cursor: "pointer" }}>
          <MdModeEdit size={20} color="blue" />
        </LinkContainer>
        <MdDelete onClick={() => deleteMemory(memory._id)} size={25} color="red" style={{ cursor: "pointer" }} />
      </Card.Footer>
    </Card>
  );
};

export default Memory;

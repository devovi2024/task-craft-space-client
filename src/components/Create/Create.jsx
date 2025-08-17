import React, { useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormHelper from "../../helper/FormHelper";
import { NewTaskReq } from "../../APIRequest/api";

const CreateTask = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();

  const handleCreate = async () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (FormHelper.isEmpty(title)) return FormHelper.ErrorToast("Title required");
    if (FormHelper.isEmpty(description)) return FormHelper.ErrorToast("Description required");

    const res = await NewTaskReq(title, description);
    if (res) navigate("/new");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg rounded-3 border-0">
            <Card.Body>
              <h4 className="text-center mb-4 fw-bold">Create New Task</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Task Title</Form.Label>
                  <Form.Control ref={titleRef} type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Task Description</Form.Label>
                  <Form.Control ref={descriptionRef} as="textarea" rows={3} placeholder="Enter description" />
                </Form.Group>
                <Button className="w-100" onClick={handleCreate}>Create Task</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTask;

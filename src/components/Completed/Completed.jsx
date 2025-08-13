import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { AiOutlineCalendar, AiOutlineEdit, AiOutlineDelete, AiOutlineCheckCircle } from 'react-icons/ai';

const Completed = () => {
  return (
    <Fragment>
      <Container fluid className="content-body py-3">
        <Row className="align-items-center mb-3">
          <Col xs={12} md={6} lg={8}>
            <h5>Task Completed</h5>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search tasks"
                className="me-2"
                aria-label="Search tasks"
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>Task Title</Card.Title>
            <Card.Text>
              This is the description of the completed task. Details about what was done.
            </Card.Text>
            <div className="d-flex align-items-center gap-3">
              <AiOutlineCalendar size={20} title="Date" />
              <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineEdit /> 
              </Button>
              <Button variant="outline-danger" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineDelete /> 
              </Button>
              <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineCheckCircle /> Completed
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Completed;

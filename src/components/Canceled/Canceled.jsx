import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { AiOutlineCalendar, AiOutlineEdit, AiOutlineDelete, AiOutlineCloseCircle } from 'react-icons/ai';

const Canceled = () => {
  return (
    <Fragment>
      <Container fluid className="content-body py-3">
        <Row className="align-items-center mb-3">
          <Col xs={12} md={6} lg={8}>
            <h5>Task Canceled</h5>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search canceled tasks"
                className="me-2"
                aria-label="Search canceled tasks"
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        <Card className="mb-3 shadow-sm border-danger">
          <Card.Body>
            <Card.Title>Task Title (Canceled)</Card.Title>
            <Card.Text>
              This task was canceled. You can review or delete it if necessary.
            </Card.Text>
            <div className="d-flex align-items-center gap-3">
              <AiOutlineCalendar size={20} title="Date" />
              <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineEdit /> Edit
              </Button>
              <Button variant="outline-danger" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineDelete /> Delete
              </Button>
              <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1" disabled>
                <AiOutlineCloseCircle /> Canceled
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Canceled;

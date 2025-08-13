import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { AiOutlineCalendar, AiOutlineEdit, AiOutlineDelete, AiOutlineLoading3Quarters } from 'react-icons/ai';

const Progress = () => {
  return (
    <Fragment>
      <Container fluid className="content-body py-3">
        <Row className="align-items-center mb-3">
          <Col xs={12} md={6} lg={8}>
            <h5>Task In Progress</h5>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search tasks in progress"
                className="me-2"
                aria-label="Search tasks in progress"
              />
              <Button variant="warning" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        <Card className="mb-3 shadow-sm border-warning">
          <Card.Body>
            <Card.Title>Task Title (In Progress)</Card.Title>
            <Card.Text>
              This task is currently in progress. Keep up the good work!
            </Card.Text>
            <div className="d-flex align-items-center gap-3">
              <AiOutlineCalendar size={20} title="Date" />
              <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineEdit /> Edit
              </Button>
              <Button variant="outline-danger" size="sm" className="d-flex align-items-center gap-1">
                <AiOutlineDelete /> Delete
              </Button>
              <Button variant="outline-warning" size="sm" className="d-flex align-items-center gap-1" disabled>
                <AiOutlineLoading3Quarters className="spin" /> In Progress
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Progress;

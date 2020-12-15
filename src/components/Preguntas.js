import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Col,
  Row,
  Collapse,
} from "reactstrap";

const Preguntas = ({ currequestion }) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  console.log(currequestion.data_preguntab);

  return (
    <div>
      {" "}
      <Card>
        <CardBody>
          <CardTitle tag="h3" style={{ marginBottom: "1rem" }}>
            Pregunta:
          </CardTitle>
          <CardSubtitle>{currequestion.name}</CardSubtitle>

          <Container>
            <Row>
              <Col>
                <Row>
                  <ListGroup>
                    {currequestion.data_preguntab.length > 0
                      ? currequestion.data_preguntab.map((data) => (
                          <ListGroupItem key={data}>{data}</ListGroupItem>
                        ))
                      : ""}
                  </ListGroup>
                </Row>
              </Col>
              <Col>
                <Row>
                  <ListGroup>
                    {currequestion.data_preguntac.length > 0
                      ? currequestion.data_preguntac.map((datac) => (
                          <ListGroupItem>{datac}</ListGroupItem>
                        ))
                      : ""}
                  </ListGroup>
                </Row>
              </Col>
            </Row>
          </Container>
          <div style={{ marginTop: "10px" }}>
            {currequestion.data_pregunta.map((data_pregunta) => (
              <CardText key={data_pregunta}>
                <strong>{data_pregunta}</strong>
              </CardText>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card>
        <Button color="primary" onClick={toggle}>
          <strong> Respuesta:</strong>
        </Button>
        <Collapse isOpen={collapse}>
          <CardBody>
            {/*  <CardTitle tag="h3">Respuesta:</CardTitle> */}
            <CardSubtitle>
              <strong>{currequestion.respuesta}</strong>
            </CardSubtitle>
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
};

export default Preguntas;

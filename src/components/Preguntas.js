import React, { useEffect, useState } from "react";
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
  Alert,
} from "reactstrap";

const Preguntas = ({ currequestion }) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  //console.log(currequestion.data_preguntab);

  useEffect(() => {
    setCollapse(false);
  }, [setCollapse]);

  console.log(collapse);

  return (
    <div>
      {" "}
      <Card>
        <CardBody>
          <CardTitle tag="h3" style={{ marginBottom: "1rem" }}>
            Pregunta:
          </CardTitle>
          <CardSubtitle>
            <Alert color="info">
              <strong>{currequestion.name}</strong>
            </Alert>
          </CardSubtitle>

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
                <Alert color="info">
                  <strong>{data_pregunta}</strong>
                </Alert>
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
              <Alert color="success">{currequestion.respuesta}</Alert>
            </CardSubtitle>
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
};

export default Preguntas;

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
  Table,
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
            {currequestion.data_preguntab.length > 0 ? (
              <Table style={{ "border-collapse": "collapse" }}>
                <tbody>
                  <tr>
                    <td>1.Pólipos</td>
                    <td>
                      A. responsable de la producción de la voz y se ubica
                      dentro de la laringe, en la parte superior de la tráquea.
                    </td>
                  </tr>
                  <tr>
                    <td>2.Nódulos</td>
                    <td>
                      B. Son pequeñas tumoraciones parecidas a un callo en las
                      cuerdas vocales, generalmente simétricas y bilaterales,
                      que se relacionan con un esfuerzo sostenido de la voz.
                    </td>
                  </tr>
                  <tr>
                    <td>3.Parálisis de cuerdas vocales</td>
                    <td>
                      C. Son pseudotumores benignos, similares a las ampollas,
                      que aparecen tras un proceso inflamatorio.
                    </td>
                  </tr>
                  <tr>
                    <td>4.Cuerdas vocales</td>
                    <td>
                      D. Produce la pérdida de la abducción y la aducción de las
                      cuerdas vocales.
                    </td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              ""
            )}
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

import React, { useEffect, useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Collapse,
  Alert,
  Table,
} from "reactstrap";

const Preguntas = ({ currequestion }) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const styletable = { border: "0px solid transparent" };

  //console.log(currequestion.data_preguntab);

  useEffect(() => {
    setCollapse(false);
  }, [setCollapse]);

  //console.log(collapse);

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
              <Table>
                <tbody>
                  <tr>
                    <td style={styletable}>
                      <strong>1.</strong>Pólipos
                    </td>
                    <td style={styletable}>
                      <strong>A.</strong> responsable de la producción de la voz
                      y se ubica dentro de la laringe, en la parte superior de
                      la tráquea.
                    </td>
                  </tr>
                  <tr>
                    <td style={styletable}>
                      <strong>2.</strong>Nódulos
                    </td>
                    <td style={styletable}>
                      <strong>B.</strong> Son pequeñas tumoraciones parecidas a
                      un callo en las cuerdas vocales, generalmente simétricas y
                      bilaterales, que se relacionan con un esfuerzo sostenido
                      de la voz.
                    </td>
                  </tr>
                  <tr>
                    <td style={styletable}>
                      <strong>3.</strong>Parálisis de cuerdas vocales
                    </td>
                    <td style={styletable}>
                      <strong>C.</strong> Son pseudotumores benignos, similares
                      a las ampollas, que aparecen tras un proceso inflamatorio.
                    </td>
                  </tr>
                  <tr>
                    <td style={styletable}>
                      <strong>4.</strong>Cuerdas vocales
                    </td>
                    <td style={styletable}>
                      <strong>D.</strong> Produce la pérdida de la abducción y
                      la aducción de las cuerdas vocales.
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

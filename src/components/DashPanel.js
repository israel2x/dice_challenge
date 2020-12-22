import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import Preguntas from "./Preguntas";
import DataPreguntas from "../data";
import { useRef, useState } from "react";

import audioDice from "../media/shakeroll.mp3";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

const DashPanel = () => {
  const [preguntas, setPreguntas] = useState(() => DataPreguntas());
  const [currequestion, setcurreQuestion] = useState(preguntas[0]);
  const audioRef = useRef(null);
  const reactDice = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  const rollDoneCallback = (num) => {
    playMusic();
    setcurreQuestion(preguntas[num - 1]);
  };

  return (
    <div
      style={{
        background: "#FFA000",
      }}
    >
      <Breadcrumb>
        <BreadcrumbItem active>Juego de Preguntas</BreadcrumbItem>
      </Breadcrumb>

      <Container
        style={{
          padding: "20px",
        }}
      >
        <Container
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#0E3854",
            borderRadius: "10px",
            boxShadow:
              " 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 10px 28px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Row>
            <Col
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <ReactDice
                numDice={1}
                rollDone={rollDoneCallback}
                faceColor={"#3399ff"}
                dotColor={"#fffff"}
                dieSize={"250"}
                ref={reactDice}
              />

              <audio src={audioDice} ref={audioRef} type="audio/mp3" />
            </Col>
            <Col>
              <Preguntas currequestion={currequestion}></Preguntas>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default DashPanel;

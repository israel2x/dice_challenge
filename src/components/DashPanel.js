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
    <div style={{ background: "#FFA000", height: "100%", width: "100%" }}>
      <Breadcrumb>
        <BreadcrumbItem active>Juego de Preguntas</BreadcrumbItem>
      </Breadcrumb>

      <Container style={{ padding: "20px" }}>
        <div
          style={{
            padding: "20px",
            background: "#0E3854",
            width: "90%",
            height: "100%",
            "border-radius": "10px",
            "justify-content": "center",
            "align-items": "center",
            "box-shadow":
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Container>
            <Row>
              <Col>
                <div
                  style={{
                    "text-align": "center",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <ReactDice
                      numDice={1}
                      rollDone={rollDoneCallback}
                      faceColor={"#3399ff"}
                      dotColor={"#fffff"}
                      dieSize={"250"}
                      ref={reactDice}
                    />
                  </div>
                  <audio src={audioDice} ref={audioRef} type="audio/mp3" />
                </div>
              </Col>
              <Col>
                <Preguntas
                  currequestion={currequestion}
                  /* toggle={toggle}
              collapse={collapse} */
                ></Preguntas>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DashPanel;

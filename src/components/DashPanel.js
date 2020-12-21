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

  //const [collapse, setCollapse] = useState(false);
  //const toggle = () => setCollapse(!collapse);

  //Data for dice
  //#3399ff
  /* const imgList = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceNum, setdiceNum] = useState(1);
  const [diceImg, setDiceImg] = useState(imgList[0]);
 */
  const playMusic = async () => {
    await audioRef.current.play();
  };

  const rollAll = () => {
    playMusic();
    reactDice.rollAll();
    console.log("done");
  };

  const rollDoneCallback = (num) => {
    console.log(`You rolled a ${num}`);
    playMusic();
    //audioRef.current.play();
    setcurreQuestion(preguntas[num - 1]);
  };

  /*  const setRandomNum = () => {
    // setCollapse(false);

    const numDice = Math.floor(Math.random() * 6) + 1;
    //    const imgDice = "dice" + numDice;

    const imgDice = imgList[numDice - 1];
    console.log(numDice);

    rollDoneCallback(numDice);
    setdiceNum(numDice);
    setDiceImg(imgDice);
    //setcurreQuestion(preguntas[numDice - 1]);
  };
 */
  return (
    <div style={{ background: "#23374D" }}>
      <Breadcrumb>
        <BreadcrumbItem active>Juego de Preguntas</BreadcrumbItem>
      </Breadcrumb>

      <Container style={{ padding: "20px" }}>
        <Container>
          <Row>
            <Col>
              <div>
                <ReactDice
                  numDice={1}
                  rollDone={rollDoneCallback}
                  faceColor={"#3399ff"}
                  dotColor={"#fffff"}
                  dieSize={"250"}
                  ref={reactDice}
                />
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
      </Container>
    </div>
  );
};

export default DashPanel;

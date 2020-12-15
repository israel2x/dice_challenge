import { Container, Row, Col } from "reactstrap";
import Dice from "./Dice";
import Preguntas from "./Preguntas";
import DataPreguntas from "../data";
import { useState } from "react";
import dice1 from "../img/dice1.png";
import dice2 from "../img/dice2.png";
import dice3 from "../img/dice3.png";
import dice4 from "../img/dice4.png";
import dice5 from "../img/dice5.png";
import dice6 from "../img/dice6.png";

const DashPanel = () => {
  const [preguntas, setPreguntas] = useState(() => DataPreguntas());
  const [currequestion, setcurreQuestion] = useState(preguntas[0]);

  //Data for dice
  const imgList = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceNum, setdiceNum] = useState(1);
  const [diceImg, setDiceImg] = useState(imgList[0]);

  const setRandomNum = () => {
    const numDice = Math.floor(Math.random() * 6) + 1;
    //    const imgDice = "dice" + numDice;

    const imgDice = imgList[numDice - 1];
    console.log(numDice);

    setdiceNum(numDice);
    setDiceImg(imgDice);
    setcurreQuestion(preguntas[numDice - 1]);
  };

  return (
    <Container style={{ padding: "20px" }}>
      <Container>
        <Row>
          <Col xs="6" sm="6">
            <Dice
              diceImg={diceImg}
              diceNum={diceNum}
              setRandomNum={setRandomNum}
            ></Dice>
          </Col>
          <Col xs="6" sm="6">
            <Preguntas currequestion={currequestion}></Preguntas>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default DashPanel;

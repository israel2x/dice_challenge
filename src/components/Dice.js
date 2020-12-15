const Dice = ({ diceImg, diceNum, setRandomNum }) => {
  return (
    <div>
      <img
        src={diceImg}
        alt="Dados"
        onClick={setRandomNum}
        style={{ backgroundColor: "#336600" }}
      />
      <div>
        <p style={{ textAlign: "center" }}>
          <strong>{diceNum}</strong>
        </p>
      </div>
    </div>
  );
};

export default Dice;

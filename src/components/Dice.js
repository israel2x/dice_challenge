const Dice = ({ diceImg, diceNum, setRandomNum }) => {
  return (
    <div>
      <div>
        <img
          src={diceImg}
          alt="Dados"
          onClick={setRandomNum}
          style={{
            backgroundColor: "#3399ff",
            "box-shadow":
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            "border-radius": "24px",
            cursor: "pointer",
            transition: "0.2s all",
          }}
        />
      </div>
      <div>
        <p style={{ textAlign: "center" }}>
          <strong style={{ color: "#3399ff" }}>{diceNum}</strong>
        </p>
      </div>
    </div>
  );
};

export default Dice;

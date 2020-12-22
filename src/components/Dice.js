const Dice = ({ diceImg, diceNum, setRandomNum }) => {
  return (
    <div>
      <img
        src={diceImg}
        alt="Dados"
        onClick={setRandomNum}
        style={{
          backgroundColor: "#3399ff",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "24px",
          cursor: "pointer",
          transition: "0.2s all",
        }}
      />
    </div>
  );
};

export default Dice;

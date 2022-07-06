import React, { useState } from "react";
import "./styles.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [previosNum, setPreviousNum] = useState(0);
  const [operator, setOperator] = useState("");

  const handleButton = (e) => {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  };
  const clear = () => {
    setNum(0);
  };
  const percent = () => {
    setNum(num / 100);
  };
  const changeOperator = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };
  const handleOperation = (e) => {
    setOperator(e.target.value);
    setPreviousNum(num);
    setNum(0);
  };
  const handleResult = () => {
    
    if (operator === "+") {

      setNum(parseFloat(previosNum) + parseFloat(num));

    } else if (operator === "-") {

      setNum(previosNum - num);

    } else if (operator === "X" || operator === 'x') {

      setNum(previosNum * num);

    } else if (operator === "/") {

      setNum(previosNum / num);

    }
    return num;
  };

  return (
    <>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="equation"> {num} </h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeOperator}>+/-</button>
          <button onClick={percent}>%</button>
          <button className="operators" onClick={handleOperation} value='/'>
            /
          </button>
          <button className="numbers" onClick={handleButton} value={7}>
            7
          </button>
          <button className="numbers" onClick={handleButton} value={8}>
            8
          </button>
          <button className="numbers" onClick={handleButton} value={9}>
            9
          </button>
          <button className="operators" onClick={handleOperation} value='x'>
            X
          </button>
          <button className="numbers" onClick={handleButton} value={4}>
            4
          </button>
          <button className="numbers" onClick={handleButton} value={5}>
            5
          </button>
          <button className="numbers" onClick={handleButton} value={6}>
            6
          </button>
          <button className="operators" onClick={handleOperation} value='-'>
            -
          </button>
          <button className="numbers" onClick={handleButton} value={1}>
            1
          </button>
          <button className="numbers" onClick={handleButton} value={2}>
            2
          </button>
          <button className="numbers" onClick={handleButton} value={3}>
            3
          </button>
          <button className="operators" onClick={handleOperation} value='+'>
            +
          </button>
          <button className="teste" onClick={handleButton} value={0}>
            {" "}
            <span style={{ padding: "23px" }}>0</span>
          </button>
          <button className="numbers" onClick={handleButton} value={"."}>
            .
          </button>

          <button className="operators" onClick={handleResult}>
            =
          </button>
        </div>
      </Container>
    </>
  );
};

export default Calculator;

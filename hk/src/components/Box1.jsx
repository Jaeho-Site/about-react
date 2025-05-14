import React from "react";
import App from "@/App";

const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#91c49f",
  color: "white",

  // 가운데 정렬 3종세트
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Box1({initCount}) {
  console.log("Box1이 렌더링되었습니다.");

  const onMinusButtonClickHandler=()=> initCount();
  return (<div style={boxStyle}>
    <button onClick={onMinusButtonClickHandler}>reset</button>
  </div>
  );
}

export default React.memo(Box1);
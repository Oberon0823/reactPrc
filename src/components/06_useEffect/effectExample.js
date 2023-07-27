import React, { useState, useEffect } from "react";

const EffectExample = () => {
  let [myName, setMyName] = useState("Oberon");
  const clickEvent = () => {
    setMyName("Vincent");
  };
  useEffect(()=>{
    console.log("正在使用useEffect內部的function");
  },[myName]) //若第二項為[] , 則會在第一次渲染時觸發一次
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={clickEvent}>更改姓名</button>
    </div>
  );
};

export default EffectExample;

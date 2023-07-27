import React, { useState } from "react";
/*在此處製作 state lifting 即可讓 info.js 使用 state */

const StateExample = ({message, setMessage}) => {
  // const StateExample = () => {
  let [input, setInput] = useState("");
  // let [message, setMessage] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value);   //接收輸入值並用
  };
  const buttonHandler = (e) => {
    e.preventDefault();
    setMessage([...message, input]);  //顯示所有message
    setInput(""); //清空 input 內部的 state
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      {/* value={input} 設定初始值為 input , 又因為 input state 初始為 "" , 因此讓 setInput 被觸發後清空表格 */}
      <button onClick={buttonHandler}>提交表單</button>
    </form>
  );
};

export default StateExample;

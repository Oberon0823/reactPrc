import React from "react";

const Info = ({ message, setMessage }) => {
  // 為了要使用 message 中的 state 因此用解構賦值
  return (
    <div className="Info">
      {message.map((Messages, index) => {
        //設定 map function 的初始值 index
        return <p key={index}>學習內容是:{Messages}</p>;
      })}
    </div>
  );
};

export default Info;

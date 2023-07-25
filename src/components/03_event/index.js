import React from "react";

const index = () => {
  const clickEvent = (message) => {
    alert("今天天氣為:" + message);
  };
  return (
    <div>
      {/* <button onClick={clickEvent("晴天")}>點擊我 ! ! !</button> */}
      {/* onClick 內部的 expression 有包含 argument , 則 react 會先執行一次( function execution ) */}
      <button
        onClick={() => {
          clickEvent("晴天");
        }}
      >
        點擊我 ! ! !
      </button>
      {/*因此將內部 expression 更改成 arrow function expression 避免先行觸發*/}
    </div>
  );
};

export default index;

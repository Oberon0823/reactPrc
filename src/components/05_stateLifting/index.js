import React, { useState } from "react";
import StateExample from "./stateExample";
import Info from "./Info";

const Index = () => {
  let [message, setMessage] = useState([]);
  //將 stateExample 中 message 的 state 拉至 Index.js
  return (
    <section data-name="Example05">
      <StateExample message={message} setMessage={setMessage} />
      {/*利用解構賦值使 index.js 可以使用 stateExample 的 state*/}
      <Info message={message} setMessage={setMessage} />
      {/*利用解構賦值使 Info.js 可以使用 stateExample 的 state*/}
    </section>
  );
};

export default Index;

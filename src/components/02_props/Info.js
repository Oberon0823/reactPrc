import React from "react";
/*子元件*/
const Info = ({name, age}) => {    //可用解構賦值代替
// const Info = (props) => {
  console.log({name, age});
  return (
    <div className="info-div">
        <h1>名字:{name}</h1>
        <h2>年齡:{age}</h2>
        {/* <h1>名字:{props.name}</h1> */}
        {/* <h2>年齡:{props.age}</h2> */}
    </div>
  );
};

export default Info;

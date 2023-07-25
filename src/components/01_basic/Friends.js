import React from "react";

const Friends = () => {
  let friends = ["Oberon", "Orthos", "Vincent"];
  return (
    <div className="Friends-div">
      <p style={{color:"red"}}>我的朋友們是</p>
        {friends.map((person)=>{
            return <p className="Friends">{person}</p>; 
        })}
    </div>
  );
};

export default Friends;

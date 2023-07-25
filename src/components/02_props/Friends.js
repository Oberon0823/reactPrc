import React from "react";
import Info from "./Info";
/*父元件*/
const Friends = () => {
  let friends = [
    { name: "Oberon", age: 24 },
    { name: "Orthos", age: 25 },
    { name: "Vincent", age: 18 },
  ];
  return (
    <div className="friend-div">
      {friends.map((Person) => (
        <Info name={Person.name} age={Person.age} />
      ))}
    </div>
  );
};

export default Friends;

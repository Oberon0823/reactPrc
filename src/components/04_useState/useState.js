import React, { useState } from 'react'

const useStateExample = () => {
    let [name, setName] = useState("Oberon");
    let age = 20;
    const clickEvent = ()=>{
        setName("Oberon Wang");
    }
  return (
    <div className='useState-div'>
        <h1>朋友名稱: {name}</h1>
        <h1>朋友年齡: {age}</h1>
        <button onClick={clickEvent}> 更改名稱 </button>
    </div>
  )
}

export default useStateExample
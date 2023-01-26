import React from 'react'

function Banner({title, subtitle, imgUrl}) {

  const handleOnPlay = () => {
    console.log("Handle on Play")
  }
    
  return (
    <div>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
        <button onClick={handleOnPlay} >Play</button>
        <div style={{
            backgroundImage: `url(${imgUrl})`,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"
        }}></div>
    </div>
  )
}

export default Banner
import React from 'react'

function Banner({title, subtitle, imgUrl}) {
  return (
    <div>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
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
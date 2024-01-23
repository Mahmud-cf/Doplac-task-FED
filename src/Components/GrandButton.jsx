import React from 'react'
import curv3 from '../assets/curv3.png'
import curv4 from '../assets/curv4.png'

function GrandButton({ title, curve, grandSubIndex }) {
    
  return (
    <div className={`grandsub grandsub${grandSubIndex + 1}`}>
      {curve && (
        <img
          src={grandSubIndex === 0 ? curv3 : curv4}
          alt=""
          className={`curv${grandSubIndex + 3}`}
        />
      )}
      <div className="button-title line">{title}</div>
      <div className="plus-icon">
        <span>+</span>
      </div>
    </div>
  )
}

export default GrandButton
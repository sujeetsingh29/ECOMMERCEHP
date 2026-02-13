import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
  <div className="newsletter">
    <h1>Get Excluive on your email</h1>
    <p>Subscribe to our newsletters and stay updated</p>
    <div>
        <input type = 'email' placeholder='your email id'  />
        <button>subscribe</button>
    </div>
  </div>
  )
}

export default Newsletter
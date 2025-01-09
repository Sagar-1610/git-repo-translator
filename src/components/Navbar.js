import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>navigate('/aboutus')}>About us</button>
      <button onClick={()=>navigate('/services')}>Services</button>
      <button onClick={()=>navigate('/technologies')}>Technologies</button>
    </div>
  )
}

export default Navbar

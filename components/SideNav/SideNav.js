"use client";
import React from 'react'
import './SideNav.scss'

export const SideNav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-buttons active'>
          <i className="fa-solid fa-house" />
          <h1>Home</h1>
      </div>

      <div className='nav-buttons'>
        <i className="fa-solid fa-address-card" />
        <h1>About Me</h1>
      </div>

      <div className='nav-buttons'>
        <i className="fa-solid fa-computer" />
        <h1>Projects</h1>
      </div>

      <div className='nav-buttons'>
        <i className="fa-solid fa-address-book" />
        <h1>Contact</h1>
      </div>

    </div >
  )
}

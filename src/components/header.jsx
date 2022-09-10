import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <div className="header-container__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
      </div>
      <div className="header-container__search">
        <ul>
          <li><a href="#">Anywhere</a></li>
          <li><a href="#">Any week</a></li>
          <li>
            <a href="#">
              <span>Add guests</span>
              <span className="material-symbols-outlined">search</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="header-container__profile">
        <ul>
          <li><a href="#">Become a Host</a></li>
          <li>
            <a href="#"><span className="material-symbols-outlined">language</span></a>
          </li>
          <li>
            <a href="#"><span className="material-symbols-outlined">menu</span></a>
            <a href="#"><span className="material-symbols-outlined">account_circle</span></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
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
      <div className="header-container__search__mobile">
        <ul className="header-container__search__mobile__ul">
          <li className="search">
            <span className="material-symbols-outlined">search</span>
          </li>
          <li>
            <p>Where to?</p>
            <ul>
              <li>Anywhere</li>
              <li>Any week</li>
              <li>Add guests</li>
            </ul>
          </li>
          <li className="tune">
          <span className="material-symbols-outlined">tune</span>
          </li>
        </ul>
      </div>
      </div>
      <span className="dot"></span>
    </header>
  )
}

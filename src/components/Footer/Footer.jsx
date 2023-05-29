import React from 'react'
import './Footer.scss'

import Logo from '../../assets/image/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__container__inner">
          <img src={Logo} alt="" />
          <h2>𝐴𝑖𝑠ℎ𝑒 & 𝑆𝑎𝑓𝑖𝑦𝑒𝑚</h2>
          <h4>Мы в соц.сетях</h4>
          <ul>
            <li><a href="https://instagram.com/aisha_safiyem" target='_blank'><i class="bi bi-instagram"></i></a></li>
            <li><a href="https://t.me/aisha_safiyem" target='_blank'><i class="bi bi-telegram"></i></a></li>
          </ul>
          <h4>Связаться с нами:</h4>
          <a href="tel:998903515111">+998 (90) 381-51-11</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
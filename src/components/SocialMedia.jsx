import React from 'react'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import facebook from '../assets/img/facebook.svg'

export const SocialMedia = () => {
  return (
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/arieladasme/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="" />
      </a>
      <a href="https://www.instagram.com/rielexisw/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="" />
      </a>
      <a href="https://web.facebook.com/rielexisw/" target="_blank" rel="noreferrer">
        <img src={facebook} alt="" />
      </a>
    </div>
  )
}

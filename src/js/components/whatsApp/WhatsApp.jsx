import React from 'react'

//import './whatsapp.css'
import '../../../css/components/whatsapp/whatsApp.css'
import whatsappLogo from '../../assets/course-icon/whatsapplogo.png'

const WhatsApp = () => {
  return (
    <div className="whatsapp-outer-container">
      <div className="components-outer-container">
        <div className="whatsapp-container" data-aos="fade-up" >
          <div className="left">
            <h1>Join Our WhatsApp Community !</h1>
            <p>Be a part of the fastest growing Coding Community, with over 15000 members. CODE, JAM, PLAY with your peers and win SWAGS, Cash Rewards and Free Courses.
            </p>
            <button> <a href="https://chat.whatsapp.com/CUaHJArukwsEZM3Ez6hQtn" target="_blank">Join Community</a></button>
          </div>
          <div className="right">
            <img src={whatsappLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsApp
import React from 'react'
import Logo from '../assets/DotHouz_logo.png'
import Bubble from '../assets/bubble-01.png'
import './footer.css'
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from 'lucide-react'

export default function Footer() {
  return (
    <div className="Footer">
        <img src={Bubble} alt="bubble" />
        <div className="Footer-Header">
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="Footer-Article">
                <h3>Stay tuned for<br/>the latest updates!</h3>
                <div className="social-media-list">
                    <LinkedinIcon fill='#459DFF' color='#459DFF'/>
                    <SendIcon color='#459DFF'/>
                    <FacebookIcon fill='#459DFF' color='none'/>
                    <InstagramIcon  color='#459DFF'/>
                </div>
                <p className="copyright-text">DOTHOUZ © 2023 All Rights Reserved</p>
            </div> 
        </div>
        
        <div className="Enquire">
            <label>Wish to know more information and updates? Subscribe to our newsletter now!</label>
            <form action="" className="submit-email-form">
                <input className="input-form-style" type="email" placeholder="Enter Your Email"/>
                <button className="submit-form-btn">Subscribe Now</button>
            </form>
        </div>
    </div>
  )
}

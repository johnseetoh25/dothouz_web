import React from 'react'
import Divider from '../components/divider'
import Phone_01 from '../assets/phone-01.png'

import './about.css'
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from 'lucide-react'
import FunctionCardList from '../components/function-card'
import BenefitCardList from '../components/benefit-card'
import { getImageURL } from '../utils/img-util'

export default function About() {

  return (
    <div>
        <header className="about-header">
            <h1>let's explore Dothouz App future for the creation of digital content and short videos together.</h1>
            <p>We are committed to create an open, transparent and fair digital platform, functions of Dothouz App including content creation and short videos.</p>
            <div className="app-install-buttons">
                <img src={getImageURL('App-Store-Button.png')} alt="iOS Button" />
                <img src={getImageURL('Google-Play-Button.png')} alt="Android Button" />
            </div>
            {/* <img src={Phone_01} alt="phone-01" /> */}
            <div className="social-media-list">
                <LinkedinIcon fill='#459DFF' color='#459DFF' size={36}/>
                <SendIcon color='#459DFF' size={36}/>
                <FacebookIcon fill='#459DFF' color='none' size={36}/>
                <InstagramIcon  color='#459DFF' size={36}/>
            </div>
        </header>
        <Divider/>
        <section className="about-us">
            <article>
                <label>About Us</label>
                <h3>Dothouz is a company dedicated to promoting the development of digital creation and the short video industry.</h3>
            </article>
            <div className="about-us-canvas">
                <img src={getImageURL('phone-canvas-02.png')} alt="phone-canvas" 
                     style={{ height: '100%', width: '100%'}}
                />
            </div>
        </section>
        <section className="about-vision">
            <label>Our Vision</label>
            <h3>To create an open, transparent and fair industry which included of digital content creation and short videos creation.</h3>
            <p>In order to implement our vision, Dothouz App has been developed, which is a diversified decentralized APP, function of Dothouz including marketplace, short video, social networking, chain games, to meet the needs of users in different scenes.</p>
            <FunctionCardList/>
        </section>
        <section className="about-mission">
            <article>
                <label>Our Mission</label>
                <h3>We aim to transform the short video industry by creating a decentralized ecosystem, and leveraging the power of blockchain technology to empower digital creators and viewers.</h3>
                <p>We will indicate the content as NFT, providing global exposure. Creating a new era of finance led by video creation and consumption, solidifying independence and growth within the crypto community. Creating an innovative investment opportunities and ecosystems for everyone through our strong capabilities.</p>
            </article>
        </section>
        <section className="about-join-us">
            <h3>By Joining us, you can:</h3>
            <BenefitCardList/>
        </section>
        <section className="about-advantages">
            <article>
                <label>Our Advantages</label>
                <h3>The great advantage that Dothouz App has is our blockchain solution</h3>
                <p>This enables our platform to provide a secure, transparent experience. Coupled with a large community of like-minded users, we create a thriving community that helps users unlock greater earning potential.</p>
            </article>
            <div className="about-advantages-canvas">
                <img src={getImageURL('phone-canvas-01.png')} alt="phone-canvas" 
                     style={{ height: '100%', width: '100%'}}
                />
            </div>
        </section>
        <section className="about-unique-mechanism">
            <div className="about-unique-canvas">
                <img src={getImageURL('chat-bubble-canvas.png')} alt="chat bubble" 
                     style={{ height: '100%', width: '100%', objectFit: 'cover',objectPosition: '0 -80px'}}
                />
            </div>
            <article>
                <label>Unique Mechanism</label>
                <h3>We have a unique equity distribution mechanism.</h3>
                <p>Through Dothouz’s unique mechanism, we reward the most active members of the community, achieving a fairer distribution of wealth and rewards.</p>
            </article>
        </section>
        <section className="about-believe">
            <article>
                <label>We Believe</label>
                <h3>The decentralization and transparency of blockchain technology can provide better protection and support for digital creators and audiences, and can also promote the development of the entire short video industry.</h3>
            </article>
            <div className="about-believe-canvas">
                <img src={getImageURL('ring-01.png')} alt="ring" 
                     style={{ position: 'absolute', zIndex: 1, left: '-400px', bottom: '-30px', filter: 'blur(60px)', rotate: '130deg', scale: 1.1}}
                />
                <img src={getImageURL('bubble-02.png')} alt="bubble"
                     style={{ position: 'absolute', zIndex: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                />
                <img src={getImageURL('phone-05.png')} alt="phone-05" 
                     style={{ position: 'absolute', zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                />
                <img src={getImageURL('bubble-03.png')} alt="bubble" 
                     style={{ position: 'absolute', zIndex: 2, left: '80px'}}
                />
            </div>
            <div className="about-believe-footer">
                <p>Let's work together to establish a fairer and more open digital creative and short video industry!</p>
                <div className="app-install-buttons">
                    <img src={getImageURL('App-Store-Button.png')} alt="iOS Button" />
                    <img src={getImageURL('Google-Play-Button.png')} alt="Android Button" />
                </div>
            </div>
        </section>
    </div>
  )
}

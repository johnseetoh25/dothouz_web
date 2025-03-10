import React from 'react'
import Divider from '../components/divider'
import './about.css'
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from 'lucide-react'
import FunctionCardList from '../components/function-card'
import BenefitCardList from '../components/benefit-card'
import { getImageURL } from '../utils/img-util'
import PhoneGroup from '../components/phone-group'

export default function About() {

  return (
    <>  
        <header id='about' className="about-header">
            <article>
                <h1>let's explore Dothouz App future for the creation of digital content and short videos together.</h1>
                <p>We are committed to create an open, transparent and fair digital platform, functions of Dothouz App including content creation and short videos.</p>
                <div className="app-install-buttons">
                    <img src={getImageURL('App-Store-Button.png')} alt="iOS Button" />
                    <img src={getImageURL('Google-Play-Button.png')} alt="Android Button" />
                </div>
                <img src={getImageURL('bubble-03.png')} alt="bubble" 
                     style={{ position: 'absolute', zIndex: -1, top: '30px', left: '-60px'}}
                />
                <img src={getImageURL('ring-01.png')} alt="ring" 
                     style={{ position: 'absolute', zIndex: -1, bottom: '-100px', right: '-200px', scale: 0.2}}
                />
                <img src={getImageURL('bubble-01.png')} alt="bubble" 
                     style={{ position: 'absolute', zIndex: -1, bottom: '-500px', left: '-250px', scale: 0.09}}
                />
            </article>
            <div className="about-header-canvas">
                <img src={getImageURL('phone-01.png')} alt="phone" 
                    style={{ position: 'absolute', zIndex: 1, bottom: '-250px', left: '50%', transform: 'translateX(-50%)'}}
                />
                <img src={getImageURL('header-bg-canvas.png')} alt="bg-canvas" 
                     style={{ position: 'absolute', zIndex: -1, left: '50%', bottom: '-25%', transform: 'translateX(-50%)'}}
                />
            </div>
            <div className="social-media-list">
                <LinkedinIcon fill='#459DFF' color='#459DFF' size={36}/>
                <SendIcon color='#459DFF' size={36}/>
                <FacebookIcon fill='#459DFF' color='none' size={36}/>
                <InstagramIcon  color='#459DFF' size={36}/>
            </div>
            <img className='header-ring-canvas'
                 src={getImageURL('ring-01.png')} alt="ring" 
            />
            <img className='header-bubble-canvas'
                 src={getImageURL('bubble-01.png')} alt="bubble" 
            />
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
        <section id='vision' className="about-vision">
            <label>Our Vision</label>
            <h3>To create an open, transparent and fair industry which included of digital content creation and short videos creation.</h3>
            <p>In order to implement our vision, Dothouz App has been developed, which is a diversified decentralized APP, function of Dothouz including marketplace, short video, social networking, chain games, to meet the needs of users in different scenes.</p>
            <FunctionCardList/>
        </section>
        <section id='mision' className="about-mission">
            <div className="about-mission-canvas">
                <div className='overlay'/>
                <img src={getImageURL('phone-03.png')} alt="phones" 
                     style={{ position: 'absolute', zIndex: 2, height: '100%', width: '100%', objectFit: 'cover'}}
                />
                <img src={getImageURL('ring-02.png')} alt="ring" 
                     style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', scale: 1.2}}
                />
            </div>
            
            <article>
                <img src={getImageURL('ring-01.png')} alt="ring" 
                    style={{ position: 'absolute', left: '-300px', top: '-200px', scale: 0.15}}
                />
                <label>Our Mission</label>
                <h3>We aim to transform the short video industry by creating a decentralized ecosystem, and leveraging the power of blockchain technology to empower digital creators and viewers.</h3>
                <p>We will indicate the content as NFT, providing global exposure. Creating a new era of finance led by video creation and consumption, solidifying independence and growth within the crypto community. Creating an innovative investment opportunities and ecosystems for everyone through our strong capabilities.</p>
            </article>
        </section>
        <div className="bubble-group-canvas">
            <img src={getImageURL('ring-01.png')} alt="ring" 
                style={{ position: 'absolute', zIndex: -1, right: '10%', top: '-50%', transform: 'translateY(-25%)',filter: 'blur(50px)'}}
            />
            <img src={getImageURL('bubble-03.png')} alt="bubble" 
                 style={{ position: 'absolute', zIndex: 1, left: '10%' }}
            />
             <img src={getImageURL('bubble-01.png')} alt="bubble" 
                 style={{ position: 'absolute', zIndex: 1, right: '-15%', top: '-350%', scale: 0.05 }}
            />
        </div>
        <section id='joinus' className="about-join-us">
            <h3>By Joining us, you can:</h3>
            <BenefitCardList/>
        </section>
        <section className="about-advantages">
            <article>
                <label>Our Advantages</label>
                <h3>The great advantage that Dothouz App has is our blockchain solution</h3>
                <p>This enables our platform to provide a secure, transparent experience. Coupled with a large community of like-minded users, we create a thriving community that helps users unlock greater earning potential.</p>
            </article>
            <div id='reward' className="about-advantages-canvas">
                <img src={getImageURL('phone-canvas-01.png')} alt="phone-canvas" 
                     style={{ height: '100%', width: '100%'}}
                />
            </div>
        </section>
        <section  className="about-unique-mechanism">
            <div className="about-unique-canvas">
                <img src={getImageURL('chat-bubble-canvas.png')} alt="chat bubble" 
                     style={{ height: '100%', width: '100%', objectFit: 'cover',objectPosition: '0 -150px'}}
                />
            </div>
            <article>
                <label>Unique Mechanism</label>
                <h3>We have a unique equity distribution mechanism.</h3>
                <p>Through Dothouz’s unique mechanism, we reward the most active members of the community, achieving a fairer distribution of wealth and rewards.</p>
            </article>
        </section>
        <section id='subscrible' className="about-believe">
            <article>
                <label>We Believe</label>
                <h3>The decentralization and transparency of blockchain technology can provide better protection and support for digital creators and audiences, and can also promote the development of the entire short video industry.</h3>
            </article>
            <div className="about-believe-canvas">
                <PhoneGroup/>
                <img src={getImageURL('bubble-02.png')} alt="bubble" 
                     style={{ position: 'absolute', zIndex: -1, bottom: '-50%', left: '50%', transform: 'translate(-50%, -120%)'}}
                />
                <img src={getImageURL('bubble-03.png')} alt="bubble" 
                     style={{ position: 'absolute', zIndex: 1, top: '-80px', left: '-10%' }}
                />
            </div>
            <div className="about-believe-footer">
                <p>Let's work together to establish a fairer and more open digital creative and short video industry!</p>
                <div className="app-install-buttons">
                    <img src={getImageURL('App-Store-Button.png')} alt="iOS Button" />
                    <img src={getImageURL('Google-Play-Button.png')} alt="Android Button" />
                </div>
            </div>
            <img src={getImageURL('ring-01.png')} alt="ring" 
                 style={{position: 'absolute', zIndex: -1, top: '50%', left: '-10%', filter: 'blur(20px)'}}
            />
        </section>
    </>
  )
}

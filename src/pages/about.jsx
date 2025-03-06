import React from 'react'
import Divider from '../components/divider'
import Phone_01 from '../assets/phone-01.png'

import './about.css'
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from 'lucide-react'
import FunctionCardList from '../components/function-card'

export default function About() {

  return (
    <div>
        <header className="about-header">
            <h1>let's explore Dothouz App future for the creation of digital content and short videos together.</h1>
            <p>We are committed to create an open, transparent and fair digital platform, functions of Dothouz App including content creation and short videos.</p>
            <img src={Phone_01} alt="phone-01" />
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
        <section className='about-benefits'>
            <h3>By Joining us, you can:</h3>
        </section>
        <section></section>
        <section></section>

    </div>
  )
}

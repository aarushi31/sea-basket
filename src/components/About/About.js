import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './About.css'
import team from '../../images/team.jpg'
import team2 from '../../images/team2.jpg'
import Footer from '../Home/Footer/Footer'
import i1 from '../../images/2672335.jpg'
import i2 from '../../images/3343892.jpg'
import i3 from '../../images/5127314.jpg'
import i4 from '../../images/20943964.jpg'
import hands from '../../images/hands.jpg'
import founder from '../../images/founder.jpg'

function About() {
    return (
        <>
        <Container>
            <Row className="row">
                <Col><img src={team} className="team-img"/></Col>
                <Col className="text">
                    We are SEA BASKET, we deep root in food craftsmanship, a passion built into a Company.
                    SEABASKET’s goal is to build a Brand that is different in every way</Col>
            </Row>
            <Row className="row">
                <Col className="text">Our passion is sourcing; our expertise is in processing. From our founding, we have focused on building a reputation for quality, integrity and reliability.</Col>
                <Col><img src={team2} className="team-img"/></Col>
            </Row>
            <div className="small-text">
                <p>We know that craft matters. </p>
                <p>That experience breeds excellence. </p>
                <p>That care is the most essential ingredient.</p>


            </div>
            <div className="qualities">
                
                <div className="quality">
                    
                    <img src={i1} style={{width:'100px'}}/>
                    <span>Performance</span></div>
                <div className="quality">
                <img src={i2} style={{width:'160px'}}/>
                    <span>High quality &amp; Sustainability</span></div>
                <div className="quality">
                <img src={i3} style={{width:'160px'}}/>
                    
                    <span>Customer focus</span></div>
                <div className="quality">
                <img src={i4} style={{width:'110px'}}/>
                    <span>Responsibility</span></div>
            </div>
            <div className="lineContainer">
                <div className="verticalLine"></div>
            </div>
            <div className="small-text" style={{marginTop:'50px'}}>
                <h2><b>We've learned</b></h2>
                <center><p>That when you connect good people with good food, great things happen</p>
                <p>We seek out fishing families that span generations, with a deep-rooted passion for their craft and a proven history of caring for their livestock and their environment.</p></center>
            </div>
            <div className="mission">
                <img src={hands} style={{width:'40vw'}}/>
                <div className="mission-text">
                    <h2>Our mission</h2>
                    <p>WE STRIVE to provide superb customer service, by utilizing a knowledgeable and courteous staff."</p>
                    <p>WE BELIEVE nothing has a greater impact on our lives than our food choices, and that food should benefit the body and please the senses without harming the planet.</p>
                    <p>WE BELIEVE That good food is both our most basic need and the greatest thing you can share with your loved ones.</p>
                </div>

            </div>
            <div className="founders">
                <h2>Meet our founders</h2>
                <div className="founder">
                    <img src={founder} style={{width:'40vw'}}/>
                    <p>Way back when a work trip took me to Mangalore Port, which put a spell on me; the fish there tasted so good and fresh, and so I began to ship them to Bengaluru for my home and, later, to my friends here in Bengaluru. Regularly for a long while friends would approach me asking for seafood from different states and every week friends of friends would get involved until the capacity of our living room wasn't up to the demand. I began to look for a solution and it was from this the idea of my own e-shop D2C first came up.<br/><br/>
                    <em>Shaik Imran Pasha.A</em></p>
                </div>
                <div className="founder">
                
                    <p>For many years I worked for distributors and retailers as a CA. Even after so many years I still enjoy marketing, and sales is my "guilty pleasure". I also now have the chance to involve myself with operations in SEA BASKET. We would like to enhance your experience, to choose to buy seafood with us.<br/><br/>
                    <em>Pradeep.P</em></p>
                    <img src={founder} style={{width:'40vw'}}/>
                </div>
            </div>

        </Container>
        <Footer/>
        </>
    )
}

export default About

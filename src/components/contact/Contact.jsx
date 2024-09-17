import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./contact.css"
import { FaPaperPlane, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaComment } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Row className='text-center'>
                    <div className="contact_head">
                        <h2>Contact</h2>
                        <h3>Get In</h3>
                        <h4>Touch</h4>
                    </div>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div class="contact-txt">
                            <h2>DON'T BE SHY!</h2>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <div class="mail">
                                <h5>Mail Me</h5>
                                <a href="mailto:sarkerfahim599@gmail.com">sarkerfahim599@gmail.com</a>
                                <FaComment className='mp' />

                            </div>
                            <div class="mob">
                                <h5>Call Me</h5>
                                <a href="tel:+880 1647389997">+880 1647389997</a>
                                <FaPhoneFlip className='mp' />
                            </div>
                            <div className="">
                                <a href="#"><FaTwitter className='icons' /></a>
                                <a href="https://github.com/fahim-sarker" target='blank'><FaGithub className='icon' /></a>
                                <a href="https://www.linkedin.com/in/fahim-sarker-089817312/" target='blank'><FaLinkedin className='icons' /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="contact-item">
                            <form action="">
                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Your email" /> <br />
                                <textarea name="" id="" placeholder='Your message'></textarea>
                                <button type="submit">Send Message <FaPaperPlane className='abc' /></button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
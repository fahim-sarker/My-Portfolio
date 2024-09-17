import React, { useEffect, useState } from 'react'
import "./menu.css"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { IoIosHome, IoIosContact } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { LiaToolboxSolid } from "react-icons/lia";
import { MdOutlineSettings } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import { RxCaretUp } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav"



const Menu = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            <Navbar expand="xl" className="menu_bg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='nav_main-1'>
                            <ul className='nav_main_one'>
                                <li> <a href="#banner" > <i><IoIosHome /></i> <span>Home</span></a> </li>
                                <li> <a href="#about" > <i><IoIosContact /></i> <span>About</span></a> </li>
                                <li> <a href="#work" > <i><LiaToolboxSolid /></i> <span>Portfolio</span></a> </li>
                                <li> <a href="#service" > <i><MdOutlineSettings /></i> <span>Service</span></a> </li>
                                <li> <a href="#contact" > <i><TbMailOpenedFilled /></i> <span>Contact</span></a> </li>
                            </ul>

                            <div class="social">
                                <a href="https://www.facebook.com/sahed.rahman.bdarmy.21" target='blank'><FaFacebook className='icons' /></a>
                                <a href="#"><FaTwitter className='icons' /></a>
                                <a href="https://github.com/SIRsahed" target='blank'><FaGithub className='icons' /></a>
                                <a href="https://www.linkedin.com/in/md-sahed-rahman-961862297/" target='blank'><FaLinkedin className='icons' /></a>
                            </div>
                            <div className="cv">
                                <a href=''>
                                    <button>
                                        Download Resume <i class="fa-solid fa-cloud-arrow-down"></i>
                                    </button>
                                </a>
                            </div>
                        </Nav>

                        <div>
                            <ScrollspyNav
                                scrollTargetIds={["home", "about", "protfolio", "contact"]}
                                offset={100}
                                activeNavClass="is-active"
                                scrollDuration="1000"
                                headerBackground="true"
                            >
                                <ul className='nav_main'>
                                    <li> <a href="#banner" className='nav-link'> <i><IoIosHome /></i> <span>Home</span></a> </li>
                                    <li> <a href="#about" className='nav-link'> <i><IoIosContact /></i> <span>About</span></a> </li>
                                    <li> <a href="#work" className='nav-link'> <i><LiaToolboxSolid /></i> <span>Portfolio</span></a> </li>
                                    <li> <a href="#service" className='nav-link'> <i><MdOutlineSettings /></i> <span>Service</span></a> </li>
                                    <li> <a href="#contact" className='nav-link'> <i><TbMailOpenedFilled /></i> <span>Contact</span></a> </li>
                                </ul>
                            </ScrollspyNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isVisible && <div>
                <button className="backtotop" onClick={handleToTop}><RxCaretUp className='icon2' /></button>
            </div>}
        </>


    )
}

export default Menu
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./work.css"
import Port1 from "../../assets/port1.png"
import Port3 from "../../assets/port3.png"
import Agency from "../../assets/agency.png"
import Port9 from "../../assets/education.png"
import { Tabs, Tab } from 'react-bootstrap'
import Workreusable from '../workreusable/Workreusable'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from '../reviewreusable/Reviewreusable'
import RazibSir from "../../assets/Razibsir.jpeg"
import Orebi from "../../assets/orebi.png"
import Hekto from "../../assets/hekto.png"
import NewsPro from "../../assets/newspro.png"

const Work = () => {
  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
  }
  return (
    <section id="work" >
      <Container>
        <Row className='text-center'>
          <div className="work_head">
            <h2>Works</h2>
            <h3>My</h3>
            <h4>Portfolio</h4>
          </div>
        </Row>
        <Row className='text-center flex'>
          <Tabs defaultActiveKey="ecommerce" className="mb-4 list11">
            <Tab eventKey="ecommerce" title="E-Commerce">
              <Row>
                <Workreusable image={Orebi} title="Orebi Multipage" content="Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies." github="https://github.com/fahim-sarker/E-COMMERCE-OREBY" livesite="https://teal-torrone-f2644d.netlify.app/" /> 

                <Workreusable image={Hekto} title="Hekto Multipage" content="Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies." github="https://github.com/fahim-sarker/hekto" livesite="https://lucky-peony-d1ab04.netlify.app/" />
                <Workreusable image={Port9} title="Academic Site" content=" had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
              </Row>
            </Tab>
            <Tab eventKey="business" title="Business">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/fahim-sarker" livesite="https://aquamarine-bublanina-e9df9d.netlify.app/" />
                <Workreusable image={Port9} title="Academic Site" content="had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://cerulean-seahorse-3730b2.netlify.app/" />

              </Row>
            </Tab>
            <Tab eventKey="newspaper" title="Newspaper">
              <Row>
              <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/fahim-sarker" livesite="https://aquamarine-bublanina-e9df9d.netlify.app/" />
              <Workreusable image={Port9} title="Academic Site" content="had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
              <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/SIRsahed/Petro-Oil-Tailwind" livesite="https://cerulean-seahorse-3730b2.netlify.app/" />
              </Row>
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
              <Row>
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/fahim-sarker" livesite="https://aquamarine-bublanina-e9df9d.netlify.app/" />
                <Workreusable image={Port9} title="Academic Site" content="had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/fahim-sarker" livesite="https://cerulean-seahorse-3730b2.netlify.app/" />
              </Row>
            </Tab>
            <Tab eventKey="education" title="Education">
              <Row>
                <Workreusable image={Port9} title="Academic Site" content="had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/fahim-sarker" livesite="https://aquamarine-bublanina-e9df9d.netlify.app/" />
                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/fahim-sarker" livesite="https://cerulean-seahorse-3730b2.netlify.app/" />
              </Row>
            </Tab>
            <Tab eventKey="restaurant" title="Restaurant">
              <Row>
              <Workreusable image={Port9} title="Academic Site" content="had the privilege of developing a fully responsive and user-friendly website for our school." github="https://github.com/fahim-sarker/M.A.H.S" livesite="https://mathabhangaadarshahighschool.netlify.app/" />
                <Workreusable image={Port1} title="Finsweet Multipage" content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I" github="https://github.com/fahim-sarker" livesite="https://aquamarine-bublanina-e9df9d.netlify.app/" />
                <Workreusable image={Agency} title="BWFC Agency" content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I" github="https://github.com/fahim-sarker" livesite="https://cerulean-seahorse-3730b2.netlify.app/" />
              </Row>
            </Tab>
          </Tabs>
        </Row>
        <Row>
          <div className="review">
            <div className="review-head text-center">
              <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
              <Reviewreusable img={RazibSir} name="Razibur Rahman" designation="Sr Faculty, Creative IT Institute" company="Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
              <Reviewreusable img={RazibSir} name="Razibur Rahman" designation="Sr Faculty, Creative IT Institute" comment="He completed the course with great skill and dedication. I personally recommend him for perfect work." />
            </Slider>
          </div>
        </Row>
      </Container>
    </section >
  )
}

export default Work
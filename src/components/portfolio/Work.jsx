import "./work.css";
import Ten from "../../assets/fistech.png";
import Bar from "../../assets/native.png";
import "slick-carousel/slick/slick.css";
import Port9 from "../../assets/vue.png";
import Todo from "../../assets/jack.jpeg"
import Flip from "../../assets/image.png"
import Port2 from "../../assets/gym1.png";
import Port3 from "../../assets/home.jpg";
import Hekto from "../../assets/nexbazar.png";
import Port1 from "../../assets/port1.png";
import Quiz1 from "../../assets/three.jpeg";
import Block from "../../assets/block.jpeg"
import Parti from "../../assets/parti.jpeg"
import { Tabs, Tab } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import Project2 from "../../assets/destiny.png";
import Viridian from "../../assets/model.jpeg";
import Project3 from "../../assets/drinks.png";
import { Container, Row } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";

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
  };
  return (
    <section id="work">
      <Container>
        <Row className="text-center">
          <div className="work_head">
            <h2>Works</h2>
            <h3>My</h3>
            <h4>Portfolio</h4>
          </div>
        </Row>
        <Row className="text-center flex">
          <Tabs defaultActiveKey="Chanllenges" className="mb-4 list11">
            <Tab eventKey="Chanllenges" title="Challenges">
              <Row>
                <Workreusable
                  image={Block}
                  title="Block Graph"
                  content="A simple React application that allows users to create and manipulate a tree of draggable nodes."
                  github="https://github.com/fahim-sarker/Block_Graph"
                  livesite="https://myblock-graph.netlify.app/"
                />
                <Workreusable
                  image={Parti}
                  title="Recursive Partitioner"
                  content="This application Users can start with a single randomly colored pane and dynamically split it into multiple resizable horizontally or vertically."
                  github="https://github.com/fahim-sarker/Recursive-Partitioner"
                  livesite="https://sweet-syrniki-564999.netlify.app/"
                />

                <Workreusable
                  image={Viridian}
                  title="Scroll Frame Animation"
                  content="A smooth and interactive scroll animation project where frames change dynamically as users scroll."
                  github="https://github.com/fahim-sarker/Three-JS-Portfolio"
                  livesite="https://cheerful-rolypoly-7866d2.netlify.app/"
                />

              </Row>
            </Tab>
            <Tab eventKey="education" title="React & React Native">
              <Row>
                <Workreusable
                  image={Port3}
                  title="Sms Home Website"
                  content="
                  SMS Home connects you with reliable, trained, and background-verified service experts across Dubai and Abu Dhabi."
                  github="https://bitbucket.org/lyans-creative/sms_home_admin_website/"
                  livesite="https://smshome.ae/"
                />
                <Workreusable
                  image={Bar}
                  title="Lafyuu Ecommerce"
                  content="The App build with React Native for a Ecommerce Platform.This App is optimized for android & ios"
                  github="https://github.com/fahim-sarker/Lafyuu-Ecommerce-Native-App"
                  // livesite="https://expo.dev/accounts/fahim_sarker/projects/lafyuecommerce/builds/4cbf3891-9dda-4a15-9481-ab3746661734"
                />
                <Workreusable
                  image={Project2}
                  title="Daily Destiny"
                  content="A responsive and user-focused website built for a News & Tv Chanel, showcasing National,International News."
                  github="https://github.com/fistech-ventures/daily-destiny-web"
                livesite="https://dailydestinybd.com/bn"
                />
              </Row>
            </Tab>
            <Tab eventKey="Next JS" title="Next JS">
              <Row>
                <Workreusable
                  image={Flip}
                  title="Sustainable Trades"
                  content="A dynamic multi-vendor eCommerce platform that connects sellers and buyers in one seamless marketplace."
                  github="https://github.com/fahim-sarker/melissabooth-123-next-js/settings"
                  livesite="https://sustainable-trades.vercel.app/"
                />


                <Workreusable
                  image={Hekto}
                  title="NexBazar"
                  content="NexBazar is a Eccomerce website that is build with Next Js and fully responsive across all of devices."
                  github="https://github.com/fistech-ventures/amorubi-ecommerce"
                  livesite="https://www.nexbazarbd.com/"
                />

                <Workreusable
                  image={Ten}
                  title="Fistech"
                  content="This is a modern, responsive website for Fistech Agency. The project showcases
                   my frontend development skills with a clean UI."
                  github="https://github.com/fistech-ventures/fistech-web"
                  livesite="https://fistech.org"
                />



              </Row>
            </Tab>


            <Tab eventKey="business" title="GSAP & Three JS">
              <Row>
                <Workreusable
                  image={Project3}
                  title="Drinks Website Made with GSAP"
                  content="This project is a Drinks Website made with GSAP, showcasing my skills in creating interactive and visually appealing web experiences."
                  github="https://github.com/fahim-sarker/SPYLT-GSAP"
                  livesite="https://spylt-gsap.netlify.app/"
                />
                <Workreusable
                  image={Quiz1}
                  title="Three JS Portfolio"
                  content="An interactive 3D portfolio website built with Three.js, showcasing creative animations, models, and smooth user interactions."
                  github="https://github.com/fahim-sarker/Three-JS-Portfolio"
                  livesite="https://mythreejsportfolio.netlify.app/"
                />

                <Workreusable
                  image={Todo}
                  title="Car Showcase Website"
                  content="A visually engaging car showcase website built with GSAP animations, highlighting different car models with smooth transitions."
                  github="https://github.com/fahim-sarker/JACK-GSAP"
                  livesite="https://jack-gsap.netlify.app/"
                />

              </Row>
            </Tab>

            <Tab eventKey="newspaper" title="Web Design & Vue Js">
              <Row>
                <Workreusable
                  image={Port2}
                  title="Fitness Gym"
                  content="This is a modern, responsive website designed for a fitness gym. The project showcases my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/My-Projecct"
                  livesite="https://galaxy-gym.netlify.app/"
                />
                <Workreusable
                  image={Port9}
                  title="Vue Js Project"
                  content="This project is a Vue.js-based web application that demonstrates
                   my skills in building interactive user interfaces using Vue.js."
                  github="https://github.com/fahim-sarker/Vue-JS"
                  livesite="https://myvuejsproject.netlify.app/"
                />
                <Workreusable
                  image={Port1}
                  title="Finsweet Multipage"
                  content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/multipage"
                  livesite="https://enchanting-cascaron-c7198f.netlify.app/"
                />
              </Row>
            </Tab>
          </Tabs>
        </Row>
        {/* <Row>
          <div className="review">
            <div className="review-head text-center">
              <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
              <Reviewreusable
                img={RazibSir}
                name="Razibur Rahman"
                designation="Sr Faculty, Creative IT Institute"
                company="Creative IT Institute"
                comment="He completed the course with great skill and dedication. I personally recommend him for perfect work."
              />
              <Reviewreusable
                img={RazibSir}
                name="Razibur Rahman"
                designation="Sr Faculty, Creative IT Institute"
                comment="He completed the course with great skill and dedication. I personally recommend him for perfect work."
              />
            </Slider>
          </div>
        </Row> */}
      </Container>
    </section>
  );
};

export default Work;

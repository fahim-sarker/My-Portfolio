import { Container, Row } from "react-bootstrap";
import "./work.css";
import Port1 from "../../assets/port1.png";
import Port2 from "../../assets/gym1.png";
import Ten from "../../assets/10.png";
import Quiz1 from "../../assets/three.jpeg";
import Port3 from "../../assets/blackjack.jpeg";
import Bar from "../../assets/bar.png";
import Port9 from "../../assets/vue.png";
import { Tabs, Tab } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from "../reviewreusable/Reviewreusable";
import RazibSir from "../../assets/Razibsir.jpeg";
import Orebi1 from "../../assets/swift.png";
import Orebi from "../../assets/orebi.png";
import Hekto from "../../assets/hekton.png";
import Viridian from "../../assets/model.jpeg";
import Project2 from "../../assets/rasmik.jpeg";
import Project3 from "../../assets/drinks.png";
import Flip from "../../assets/image.png"
import Todo from "../../assets/jack.jpeg"
import Block from "../../assets/block.jpeg"
import Parti from "../../assets/parti.jpeg"

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
            <Tab eventKey="education" title="React Js">
              <Row>
                <Workreusable
                  image={Bar}
                  title="Multi-Vendor Bar"
                  content="The site features a dedicated multi-vendor bar that allows users to easily filter and browse products by vendor."
                  github="https://github.com/fahim-sarker/alex420"
                  livesite="https://sipawayy.com/"
                />
                <Workreusable
                  image={Project2}
                  title="Fire Protection"
                  content="A responsive and user-focused website built for a logistics company, showcasing their services and operational capabilities."
                  github="https://github.com/fahim-sarker"
                  livesite="https://tgrasmick.netlify.app/"
                />
                <Workreusable
                  image={Port3}
                  title="Black Jack Payments"
                  content="A clean and user-friendly payment platform designed to streamline online transactions and manage logistics-related payments efficiently."
                  github="https://github.com/fahim-sarker"
                  livesite="https://blackjackpay-one.vercel.app/"
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
                {/* <Workreusable
                  image={Orebi}
                  title="Orebi Ecommerce"
                  content="Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/E-COMMERECE"
                  livesite="https://fs-ecommerce.netlify.app/"
                /> */}
                <Workreusable
                  image={Ten}
                  title="10 Minute Scholl Ielts"
                  content="This is a modern, responsive website  for  10 Minute Ielts Course. The project showcases
                   my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/10-Minute-Task"
                  livesite="https://10-minute-task-ten.vercel.app/en/product/ielts-course"
                />

                <Workreusable
                  image={Hekto}
                  title="Hekto Ecommerce"
                  content="Hekto is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/hekto"
                  livesite="https://lucky-peony-d1ab04.netlify.app/"
                />

              </Row>
            </Tab>

            {/* <Tab eventKey="TypeScript" title="TypeScript">
              <Row>
                <Workreusable
                  image={Ten}
                  title="10 Minute Scholl Ielts"
                  content="This is a modern, responsive website  for  10 Minute Ielts Course. The project showcases
                   my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/10-Minute-Task"
                  livesite="https://10-minute-task-ten.vercel.app/en/product/ielts-course"
                />
                <Workreusable
                  image={Orebi1}
                  title="Cargo Website"
                  content="This project is a responsive and user-focused website designed for 
                  a Cargo company, showcasing their services and capabilities."
                  github="https://github.com/fahim-sarker/swift-express-cargo"
                  livesite="https://graphfull.vercel.app/"
                />

                <Workreusable
                  image={Viridian}
                  title="Business Task Management"
                  content="This project is a full-featured task management web application built for teams and businesses to organize, track, and manage tasks efficiently."
                  github="https://github.com/fahim-sarker/Viridian"
                  livesite="https://viridianbray-client.netlify.app"
                />
              </Row>
            </Tab> */}
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

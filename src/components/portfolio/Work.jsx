import "./work.css";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";

import Ten from "../../assets/fistech.png";
import Bar from "../../assets/native.png";
import Port9 from "../../assets/vue.png";
import Todo from "../../assets/jack.jpeg";
import Flip from "../../assets/image.png";
import Port2 from "../../assets/gym1.png";
import Port3 from "../../assets/home.jpg";
import Hekto from "../../assets/nexbazar.png";
import Port1 from "../../assets/port1.png";
import Quiz1 from "../../assets/three.jpeg";
import Block from "../../assets/block.jpeg";
import Parti from "../../assets/parti.jpeg";
import Project2 from "../../assets/destiny.png";
import Viridian from "../../assets/model.jpeg";
import Project3 from "../../assets/drinks.png";

const categories = [
  {
    key: "challenges",
    title: "Challenges",
    projects: [
      {
        image: Block,
        title: "Block Graph",
        content:
          "A React app for building and manipulating a tree of draggable nodes with a smooth, intuitive canvas.",
        github: "https://github.com/fahim-sarker/Block_Graph",
        livesite: "https://myblock-graph.netlify.app/",
      },
      {
        image: Parti,
        title: "Recursive Partitioner",
        content:
          "Start with one randomly colored pane and split it endlessly, horizontally or vertically, into resizable sections.",
        github: "https://github.com/fahim-sarker/Recursive-Partitioner",
        livesite: "https://sweet-syrniki-564999.netlify.app/",
      },
      {
        image: Viridian,
        title: "Scroll Frame Animation",
        content:
          "A buttery-smooth scroll experience where animation frames change dynamically as you scroll.",
        github: "https://github.com/fahim-sarker/Three-JS-Portfolio", // TODO: check, same repo as Three JS Portfolio
        livesite: "https://cheerful-rolypoly-7866d2.netlify.app/",
      },
    ],
  },
  {
    key: "react",
    title: "React & React Native",
    projects: [
      {
        image: Port3,
        title: "SMS Home",
        content:
          "A service marketplace connecting customers with trained, background-verified experts across Dubai and Abu Dhabi.",
        github: "https://bitbucket.org/lyans-creative/sms_home_admin_website/",
        livesite: "https://smshome.ae/",
      },
      {
        image: Bar,
        title: "Lafyuu E-commerce",
        content:
          "A cross-platform e-commerce app built with React Native, optimized for both Android and iOS.",
        github: "https://github.com/fahim-sarker/Lafyuu-Ecommerce-Native-App",
      },
      {
        image: Project2,
        title: "Daily Destiny",
        content:
          "A fast, responsive news and TV channel website covering national and international headlines.",
        github: "https://github.com/fistech-ventures/daily-destiny-web",
        livesite: "https://dailydestinybd.com/bn",
      },
    ],
  },
  {
    key: "nextjs",
    title: "Next JS",
    projects: [
      {
        image: Flip,
        title: "Sustainable Trades",
        content:
          "A dynamic multi-vendor marketplace that brings sellers and buyers together in one seamless platform.",
        github: "https://github.com/fahim-sarker/melissabooth-123-next-js",
        livesite: "https://sustainable-trades.vercel.app/",
      },
      {
        image: Hekto,
        title: "NexBazar",
        content:
          "A fully responsive e-commerce website built with Next.js, polished for every screen size.",
        github: "https://github.com/fistech-ventures/amorubi-ecommerce",
        livesite: "https://www.nexbazarbd.com/",
      },
      {
        image: Ten,
        title: "Fistech",
        content:
          "A modern, responsive agency website with a clean UI and attention to frontend detail.",
        github: "https://github.com/fistech-ventures/fistech-web",
        livesite: "https://fistech.org",
      },
    ],
  },
  {
    key: "creative",
    title: "GSAP & Three JS",
    projects: [
      {
        image: Project3,
        title: "SPYLT Drinks",
        content:
          "An interactive drinks website powered by GSAP, packed with scroll-driven and visually rich animations.",
        github: "https://github.com/fahim-sarker/SPYLT-GSAP",
        livesite: "https://spylt-gsap.netlify.app/",
      },
      {
        image: Quiz1,
        title: "Three JS Portfolio",
        content:
          "An immersive 3D portfolio built with Three.js, featuring animated models and smooth interactions.",
        github: "https://github.com/fahim-sarker/Three-JS-Portfolio",
        livesite: "https://mythreejsportfolio.netlify.app/",
      },
      {
        image: Todo,
        title: "Car Showcase",
        content:
          "A cinematic car showcase using GSAP to move between models with fluid transitions.",
        github: "https://github.com/fahim-sarker/JACK-GSAP",
        livesite: "https://jack-gsap.netlify.app/",
      },
    ],
  },
  {
    key: "design",
    title: "Web Design & Vue Js",
    projects: [
      {
        image: Port2,
        title: "Fitness Gym",
        content:
          "A modern, responsive gym website with a clean, energetic UI.",
        github: "https://github.com/fahim-sarker/My-Projecct",
        livesite: "https://galaxy-gym.netlify.app/",
      },
      {
        image: Port9,
        title: "Vue Js Project",
        content:
          "A Vue.js web application showcasing interactive, component-driven interfaces.",
        github: "https://github.com/fahim-sarker/Vue-JS",
        livesite: "https://myvuejsproject.netlify.app/",
      },
      {
        image: Port1,
        title: "Finsweet Multipage",
        content:
          "A 12-page agency website built with Bootstrap and fully responsive across devices.",
        github: "https://github.com/fahim-sarker/multipage",
        livesite: "https://enchanting-cascaron-c7198f.netlify.app/",
      },
    ],
  },
];

const Work = () => {
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
          <Tabs defaultActiveKey={categories[0].key} className="mb-4 list11">
            {categories.map((cat) => (
              <Tab key={cat.key} eventKey={cat.key} title={cat.title}>
                <Row>
                  {cat.projects.map((p) => (
                    <Workreusable key={p.title} {...p} />
                  ))}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
import React, { useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../src/App.css";

import parallax from "../src/assets/ParallaxBackground.webp";

import Hero from "./components/Hero";
import AboutMeContainer from "./containers/AboutMeContainer";
import SkillsContainer from "./containers/SkillsContainer";
import RecentProjectsContainer from "./containers/RecentProjectsContainer";
import Parallax from "./components/Parallax.js";
import Contact from "./components/Contact";
import DataStructuresContainer from "./containers/DataStructuresContainer";
const App = () => {
  const recentProjectsRef = useRef(null);
  const contactRef = useRef(null);

  const particlesInit = async (main) => {
    // console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <>
      <div className="container-style">
        <Particles
          height="100vh"
          width="100vw"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: -1 },
            background: {
              color: {
                value: "#24215a",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ff748a",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Hero
          handleClick={executeScroll}
          recentProjectsRef={recentProjectsRef}
          contactRef={contactRef}
        />
      </div>
      <AboutMeContainer />
      <SkillsContainer />
      <Parallax backgroundImage={parallax} />
      <RecentProjectsContainer recentProjectsRef={recentProjectsRef} />
      <DataStructuresContainer />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default App;

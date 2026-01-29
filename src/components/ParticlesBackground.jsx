import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: "#0b0f14",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: "#f6f6fb",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.25,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;

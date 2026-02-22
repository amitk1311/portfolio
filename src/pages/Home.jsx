import ParticlesBackground from "../components/ParticlesBackground";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* PARTICLES */}
      <ParticlesBackground />

      {/* CONTENT */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default Home;

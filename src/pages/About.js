import Accordion from "../components/About/Accordion";

import ParticlesBackground from "../components/Shared/ParticlesBackground";
function Headline() {
    return (
        <div class="w-full h-full max-w-5xl items-center py-24">
            <h1 class="text-4xl md:text-4xl font-bold text-white leading-tight">
                The Epitome of an <span className="text-magenta hover:text-magenta-light">Impactful</span> Software Engineer
            </h1>
            <p class="text-lg md:text-2xl text-gray-300 mt-4">
                I bring intention, ownership, and momentum to every challenge I take on.
            </p>
        </div>
    );
}

function About() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div class="text-center min-h-screen flex justify-center px-4">
        <div className="w-full h-full max-w-5xl items-center pt-20">
        <Headline />
        <Accordion />
        </div>
      </div>
    </div>
  );
}

export default About;
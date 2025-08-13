import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/Parcours';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <>
    <Hero />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection/>
    <Contact />
    </>
  )
}

export default HomePage
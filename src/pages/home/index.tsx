import AboutUs from "../../sections/aboutUs";
import Goals from "../../sections/goals";
import State from "../../sections/state";
import ProjectSection from "../../sections/project";
import Line from "../../components/line";
import Contact from "../../sections/contact";
import Hero from "../../sections/hero";
import Investment from "../../sections/investment";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutUs />
      <Goals />
      <Line />
      <Investment />
      <Line />
      <State />
      <Line />
          <ProjectSection />
          <Line />
          <Contact />
    </main>
  );
}

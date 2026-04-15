import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import InvestmentDetails from "./pages/investmentDetails";
import ProjectDetails from "./pages/projectDetails";
import "./App.css";

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const investmentMatch = hash.match(/^#\/investment\/(\d+)(?:\/)?$/);
  const investmentId = investmentMatch ? Number(investmentMatch[1]) : null;

  const projectMatch = hash.match(/^#\/project\/(\d+)(?:\/)?$/);
  const projectId = projectMatch ? Number(projectMatch[1]) : null;

  useEffect(() => {
    if (investmentId === null && projectId === null) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [investmentId, projectId]);

  return (
    <>
      <Header />
      {projectId ? (
        <ProjectDetails projectId={projectId} />
      ) : investmentId ? (
        <InvestmentDetails opportunityId={investmentId} />
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}

export default App;

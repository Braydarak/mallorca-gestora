import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import InvestmentDetails from "./pages/investmentDetails";
import ProjectDetails from "./pages/projectDetails";
import CookiesPolicyPage from "./pages/cookies";
import LegalNoticePage from "./pages/legalNotice";
import PrivacyPolicyPage from "./pages/privacyPolicy";
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

  const isLegalNoticePage = /^#\/aviso-legal(?:\/)?$/.test(hash);
  const isCookiesPolicyPage = /^#\/politica-de-cookies(?:\/)?$/.test(hash);
  const isPrivacyPolicyPage = /^#\/privacidad(?:\/)?$/.test(hash);

  useEffect(() => {
    if (!hash.startsWith("#/")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [hash]);

  const content = projectId ? (
    <ProjectDetails projectId={projectId} />
  ) : investmentId ? (
    <InvestmentDetails opportunityId={investmentId} />
  ) : isLegalNoticePage ? (
    <LegalNoticePage />
  ) : isCookiesPolicyPage ? (
    <CookiesPolicyPage />
  ) : isPrivacyPolicyPage ? (
    <PrivacyPolicyPage />
  ) : (
    <Home />
  );

  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import InvestmentDetails from "./pages/investmentDetails";
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

  const match = hash.match(/^#\/investment\/(\d+)(?:\/)?$/);
  const investmentId = match ? Number(match[1]) : null;

  useEffect(() => {
    if (investmentId === null) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [investmentId]);

  return (
    <>
      <Header />
      {investmentId ? (
        <InvestmentDetails opportunityId={investmentId} />
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}

export default App;

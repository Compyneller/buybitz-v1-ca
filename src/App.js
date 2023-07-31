import { Suspense, lazy, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import NavBarComp from "./components/NavBarComp";
import Career from "./pages/Career";
import OTC from "./pages/OTC";
import OurPPolicy from "./pages/OurPPolicy";
const MobileFooter = lazy(() => import("./components/MobileFooter"));
const Home = lazy(() => import("./pages/Home"));
const NewFooter = lazy(() => import("./components/NewFooter"));
const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const date = new Date();
    console.log(date.toLocaleString());
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    const resize = window.addEventListener("resize", () => {
      window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<LoadingPage />}>
          <NavBarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/otc" element={<OTC />} />
            <Route path="/privacy" element={<OurPPolicy />} />
          </Routes>
          {isMobile ? <MobileFooter /> : <NewFooter />}
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default App;

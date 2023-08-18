import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PeopleView, PlanetsView, VehiclesView } from "./views/aboutus";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="bg bg-dark">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:id" element={<PeopleView />} />
            <Route path="/planets/:id" element={<PlanetsView />} />
            <Route path="/vehicles/:id" element={<VehiclesView />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default injectContext(Layout);

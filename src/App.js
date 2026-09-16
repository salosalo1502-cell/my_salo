
import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header/header.jsx";
import Footer from "./Footer/footer.jsx";
import Content from "./Components/Content/content.jsx";
import Into from "./Contaqt/Into.jsx";
import MainContent from "./Components/Content/mainContent.jsx";

import About from "./Components/Content/About/aboutUs.jsx";


import TestimonialsChat from "./Trast/Testimonials/Testimonial.jsx";

import TeamCards from "./Stups/stup.jsx";
import Courses from "./Components/Dropdowns/courses.jsx";
import ScrollToTop from "./ScrollToTop/ScrollToTop .jsx";
import Portfolios from "./Components/StudentBlock/studentPorfolios.jsx";
import Mentor from "./Mentor/mentorPage.jsx";
import Contaqt from "./Kontaqt/contaqt.jsx";
import Trast from "./Trast/trast.jsx";
import Portfolio from "./Portfolios/portfolio.jsx";
import Registr from "./register.jsx";
import "bpg-extrasquare-mtavruli/css/bpg-extrasquare-mtavruli.min.css";


function App() {
  const [showMain, setShowMain] = useState(false);

  if (!showMain) {
    return (
      <Into onFinish={() => setShowMain(true)} />
    );
  }

  return (
    <>
      <Header />
<ScrollToTop />
<div className="app">
 <main className="appContent">

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Content />
              <MainContent />
              <Trast/>
              <Portfolio/>

              <TestimonialsChat />
              <TeamCards />


            </>

          }
        />

        {/* ABOUT */}
        <Route path="/aboutUs" element={<About />} />
        <Route path="/courses" element={ <Courses />} />
         <Route path="/studentPorfolios" element={ <Portfolios />} />
         <Route path="/mentorPage" element={ < Mentor />} />
           <Route path="/contaqt" element={ < Contaqt />} />
        <Route path="/register" element={ <Registr  />} />

           


      </Routes>
</main>
      <Footer />
</div>

    </>
  );
}

export default App;

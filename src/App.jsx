import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  Hero,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bf-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

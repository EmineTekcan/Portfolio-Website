import Home from "./components/Home";
import NavBar from "./components/NavBar";
import  SocialLinks from './components/SocialLinks.jsx'
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;

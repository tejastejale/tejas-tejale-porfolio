import './app.scss';
import Contact from './contact/Contact.jsx';
import Hero from './hero/Hero.jsx';
import Navbar from "./navbar/Navbar.jsx";
import Parallax from './parallax/Parallax.jsx';
import Portfolio from './portfolio/Portfolio.jsx';
import Services from './services/services.jsx';

const App = () => {
  return <div>
    
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section>
      <Parallax type="services"/>
    </section>
    
    <section id="Services">
      <Services/>
    </section>

    <section >
      <Parallax type="portfolio"/>
    </section>

    <Portfolio />

    <section id='Contact'>
      <Contact />
    </section> 
  </div>
};

export default App;

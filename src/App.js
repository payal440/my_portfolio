import './App.css';
import { NavBar } from './componets/Navbar';
import { Banner } from './componets/Banner';
import { Skills } from './componets/Skills';
import { Projects } from './componets/Projects';
import { Experience } from './componets/Experience';
import { Footer } from './componets/Footer';
import Contact from './componets/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
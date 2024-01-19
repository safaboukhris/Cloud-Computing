import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Intro from './components/Intro/Intro';
import Intoparag from './components/Intoparag';
import Contact from './components/contact/Contact';
import Contactintro from './components/contact/Contactintro';
import SimpleMap from './components/SimpleMap';

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Heading/>
      <Intoparag/>
      <Intro/>
      <Contactintro/>
      <div className='container'>
        <SimpleMap/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

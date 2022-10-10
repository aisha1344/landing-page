
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import OurClients from './pages/OurClients';
import OurServices from './pages/OurServices';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <About/>;
   <Team/>
   <ContactUs />
    </div>
  );
}

export default App;

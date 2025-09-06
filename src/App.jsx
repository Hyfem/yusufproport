import './App.css'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/index';
import Nav from './components/Nav/index'
import About from './components/About';
import Projects from './components/projects';
import Mystack from './components/Mystacks';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Mystack />
      <Footer />



    </Router>
  )
}

export default App

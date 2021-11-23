import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (<div>
    <BrowserRouter>

    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/resume" component={Resume}/>

    </Switch>
 
   <Footer/>
 
  </BrowserRouter>
  </div>
  
    
  );
}

export default App;

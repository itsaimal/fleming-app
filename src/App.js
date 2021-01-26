
import './App.css';
import './assets/output.css'
import Footer from './Footer';
import Header from './Header';
import Home from './Home/Home';
import Logo from './Logo';
import Blue from "./Blue"
import Patient from './Patient/Patient';
import Doctor from './Doctor/Doctor';
import Business from './Business.js/Business';
import Product from './Products/Product';
import Contact from './Contact/Contact';
import About from './About/About';
import Fund from './Fund/Fund';
import { Switch, Route } from "react-router-dom";

import Pre from './Pre/Pre'
import Aisym from './Aisym/Aisym'

import TalkToDoc from './TalkToDoc/TalkToDoc'
import Vitamins from './Vitamins/Vitamins'
import Patienton from './Patienton/Patienton'


function App() {
  return (
    <div className="">

<Logo/>
   <Header/>
      <Switch>
     

     
       
  <Route path="/patient">
  
   <Patient/>

   
   </Route>

  <Route path="/doctor">
   <Doctor/>
   </Route>

  <Route path="/business"><Business/>
   </Route>

  <Route path="/products"><Product/>
   </Route>

  <Route path="/contact"><Contact/>
  </Route>

  <Route path="/about">  <About/>
</Route>

  <Route path="/eu-fund">
  <Fund/>
   </Route>

   <Route path="/vitamins">
     <Vitamins/>
     </Route>
  
   <Route path="/prescription">
     <Pre/>
     </Route>

<Route path="/AI-sym">
     <Aisym/>
     </Route>



<Route path="/Talk-to-doc">
     <TalkToDoc/>
     </Route>

<Route path="/onboard">
     <Patienton/>
     </Route>

 
   <Route path="/">
 

  <Home/>
  
  

  </Route>



   </Switch>
   <Blue/>
   <Footer/>
     
    </div>
  );
}

export default App;

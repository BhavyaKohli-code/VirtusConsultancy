import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar'; // Correct import
import Whatwedo from './Components/Whatwedo/Whatwedo';
import Whoweare from './Components/whoweare/Whoweare.jsx';
import Casestudy from './Components/casestudies/Casestudies';
import Landingpage from './Components/Hero/Landingpage';
import Contactform from './Components/Contact/Contactform';
import Footer from './Components/footer/Footer';
import Businessconsultancy from './Components/MASTERPAGES-head/Businessconsultancy.jsx';
import SocialMediaManagement from './Components/MASTERPAGES-head/SMM.jsx';


function App() {
  return (
    
<Router>

      <Navbar />

<Routes>
<Route path="/" element={<Landingpage />} />
<Route path="/whatwedo" element={<Whatwedo />} />
<Route path="/Whoweare" element={<Whoweare/>} />
<Route path="/casestudies" element={<Casestudy />} />
<Route path="/Contact" element={<Contactform />} />
<Route path="/BusinessConsultancy" element={<Businessconsultancy />} />
<Route path="/SocialMediaManagement" element={<SocialMediaManagement />} />

</Routes>

<Footer/>

</Router>
  );
}

export default App;
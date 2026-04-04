import React from 'react'
import  Navbar  from './Components/Navbar';
import  EnterpriseAI  from './Components/EnterpriseAI';
// import CoreServices  from './Components/CoreServices';
import  EndlessPossibilities  from "./Components/EndlessPossibilities";
import BuildingAI from './Components/BuildingAI';
import IntelligentAI from './Components/IntelligentAI';
import Initiative from './Components/Initiative';
import StepApproach from './Components/StepApproach';
import Industry from './Components/Industry';
import AIVoice from './Components/AIVoice';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <EnterpriseAI/>
     
      <BuildingAI/>
      <IntelligentAI/>
      <Initiative/>
      <StepApproach/>  
      <EndlessPossibilities/>
      <Industry/>
      <AIVoice/>
      <Footer/>
    </div>
  )
}
export default App;
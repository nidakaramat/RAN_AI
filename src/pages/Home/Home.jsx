import React from 'react'
import AIVoice from './components/AIVoice'
import BuildingAI from './components/BuildingAI'
import EnterpriseAI from './components/EnterpriseAI'
import EndlessPossibilities from './components/EndlessPossibilities'
import Initiative from './components/Initiative'
import IntelligentAI from './components/IntelligentAI'
import Industry from './components/Industry'
import StepApproach from './components/StepApproach'

const Home = () => {
  return (
    <div>
      <EnterpriseAI />
      <BuildingAI />
      <IntelligentAI />
      <Initiative />
      <StepApproach />
      <EndlessPossibilities />
      <Industry />
      <AIVoice />
    </div>
  );
};

export default Home;

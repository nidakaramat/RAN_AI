import React from 'react'
import IntelligentAIServices from './components/IntelligentAIServices';
import AIServices from './components/AIServices';
import CoreCapabilities from './components/CoreCapabilities';
import LetConnect from "../About/components/LetConnect";

const Services = () => {
  return (
    <div>
      <AIServices />
      <IntelligentAIServices/>
      <CoreCapabilities />
      <LetConnect />
    </div>
  )
}

export default Services;
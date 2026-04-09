import React from 'react'
import { motion } from "framer-motion";
import BuildingFuture from './components/BuildingFuture';
import IntelligentSystem from './components/IntelligentSystem';
import PotentailAI from './components/PotentailAI';
import IntelligentAI from './components/IntelligentAI';
import LetConnect from './components/LetConnect';
const About = () => {
  return (
    <div>
      <BuildingFuture />
      <IntelligentSystem />
      <IntelligentAI />
      <PotentailAI />
      <LetConnect />
    </div>
  )
}

export default About;
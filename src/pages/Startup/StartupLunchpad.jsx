import React from 'react'
import StartupLunch from './components/StartupLunch';
import EverythingLunch from './components/EverythingLunch';
import FAQ from './components/Frequency';
import LetConnect from "../About/components/LetConnect";

const StartupLunchpad = () => {
  return (
    <div>
      <StartupLunch/>
      <EverythingLunch/>
      <FAQ />
      <LetConnect />
    </div>
  )
}

export default StartupLunchpad;
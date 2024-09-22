import React from 'react'
import HeroSection from './_components/hero/hero'
import ProgramSection from './_components/program/program-section'
import CalculatorSection from './_components/calculator/calculator-section'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <ProgramSection />
      <CalculatorSection />
    </div>
  )
}

export default HomePage
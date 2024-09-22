import React from 'react'
import HeroSection from './_components/hero/hero'
import ProgramSection from './_components/program/program-section'
import CalculatorSection from './_components/calculator/calculator-section'
import GallerySection from './_components/gallery/gallery-section'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <ProgramSection />
      <GallerySection />
      <CalculatorSection />
    </div>
  )
}

export default HomePage
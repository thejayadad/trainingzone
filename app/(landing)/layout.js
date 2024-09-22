import React from 'react'
import Header from './_components/header/header'
import Footer from './_components/footer/footer'

const layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
       <main className='flex-1 flex flex-col'>
         {children}
       </main>
        <Footer />
    </div>
  )
}

export default layout
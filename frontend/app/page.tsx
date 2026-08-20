import React from 'react'
import Navbar from '@/app/(components)/shared/Navbar'
import Footer from './(components)/shared/Footer'

function Home() {
  return (
    <>
      <div className="bg-brand-background">
        <h1 className="text-brand-navy font-bold text-4xl">
          Home page
        </h1>
      </div>

      <Navbar />
      <Footer/>
    </>
  )
}

export default Home
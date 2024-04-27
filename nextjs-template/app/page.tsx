import React from 'react'
import Menu from './components/menu'
import Sauces from './components/sauces'

function page() {
  return (

    <section className="text-red-600 m-2 bg-white">
     
      <div className="p-10 container">
        <h1 className="text-4xl font-bold text-center">Pizza & Pints</h1>
        <Menu />
        <Sauces />
        <p className="text-center pt-4 font-light italic">If you have any allergies, please inform a member of staff.</p>
      </div>

  
      
    </section>
  )
}

export default page
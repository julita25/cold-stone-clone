import React from 'react'
import '../App.css'
import {data_offers} from '../data-content/slider-data'
import Cards from '../Cards'
import Promo from '../Promos'
import MainSection from '../MainSection'

function Home() {
    return (
        <>
          <MainSection/>  
          <Cards/>
          <Promo slides = {data_offers}/>
         
        </>
    )
}

export default Home

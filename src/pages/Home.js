import React from 'react'
import '../App.css'
import {data_offers} from '../data-content/slider-data'
import Cards from '../components/Cards/Cards'
import Promo from '../components/Promos/Promos'
import MainSection from '../components/MainSection/MainSection'

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

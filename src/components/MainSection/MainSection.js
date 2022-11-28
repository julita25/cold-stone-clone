import React from 'react'
import cold_stone from '../../images/cold-stone.png'
import '../../App.css'
import './main.css'


function MainSection() {
    return (
        <div className= 'main-container'>
            <img src= {cold_stone} className='img1'/>
            <div className= 'banner-contents'>
                <h1> COLD STONE CREAMERY</h1>
                <p>The ultimate Ice cream Experience</p>
            
            
                <div className = "banner__buttons">
                    <button className="banner__button">ORDER NOW</button>
                    <button className="banner__button">DISCOVER</button>

                </div>
            </div>
            
            

         </div>
            
        
    )
}

export default MainSection

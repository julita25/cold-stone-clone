import React, {useState, useEffect ,useRef} from 'react'
import './promos.css'
import {IoMdArrowBack, IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'


function Promo({slides}) {
    const [picture, setPicture] = useState(0)
    const length=slides.length//constains the total number of slides (value 4)
    const timeout = useRef(null)

    /*useEffect(
        () => {
        const nextSlide = () => {
            //pass the logic to the picture parameter
            setPicture(picture => (picture === length -1 ? 0 : picture + 1))
        }

        timeout.picture = setTimeout(nextSlide, 3000)//every 3 seconds

        return function () {
            if(timeout.picture) {//if timeout is true we clear the timeout
                clearTimeout(timeout.picture)
            }
        }
       
    }, [picture, length])//the input is the  curernt picture and lenght
*/

    const nextSlide = () => {
        //the function checks if the pic is number 4
       // starts from picture 0, otherwise increment one
        setPicture(picture === length - 1 ? 0 : picture + 1)
       // console.log(length)
        //console.log(picture)
    }

    const prevSlide = () => {
        //for prevSlide function if the user is in the first slide
        //and wants to return will be directed to the last picture
        setPicture(picture === 0 ? length - 1 : picture - 1)
        //console.log(picture)
    }

//if there is no data it should work (just in case function)
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


  
    return (
        <div className = "promo-box">
            <div className = "wrapper">
            "Take a look to the lates promos!!"
            {/*we map each image */}
            {slides.map((slide, index) => {
                return (
                    <div className= "slide" key={index}>
                        {index === picture && (//if the index of pic is same as the current slide...

                            <div className= "slider">
                            <img src={slide.image} alt={slide.alt} className="img-promo"/>
                            <div className="content">
                                <h1>{slide.title}</h1>
                                <h3>{slide.valid}</h3>
                               
                            </div>
                            
                        </div>

                        )}
                        
                        
                    </div>
                    

                )

            }) }
            <div className= "slider-btn">
                <div className="arrow-btn"><IoMdArrowBack  onClick= {prevSlide} size='1.5 rem'/></div>
                <div className="arrow-btn"><IoArrowForward onClick={nextSlide} size= '1.5 rem'/></div>
    
            </div>

            </div>
           

            
        </div>
    )
}

export default Promo

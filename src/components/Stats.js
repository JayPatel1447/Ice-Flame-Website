import React from 'react'
import styles from 'styled-components'
import{GiEarthAmerica } from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer, } from 'react-icons/md'
import {RiLiveFill} from "react-icons";


const StatsData = [
    {
        icons: (<GiEarthAmerica />),
        title: "This frozen dessert originated in Thailand under the name Thai rolled ice cream. Now known as Rolled Ice Cream"
    }
]



const Stats = () => {
    return (
        <>
        <StatsContainer>
            <Heading>
            ROLL ME IN
            </Heading>
            <subHeading>
                Sign up to hear from us about discounts and special events.
            </subHeading>

          
            {/* <input type="email"  id="exampleFormControlInput1" placeholder="name@example.com" /> */} 
            
        </StatsContainer>

         </>
    )
}

export default Stats

const StatsContainer = styles.div`
width: 100%;
background : #fff;
color: #000;
text-align: center;
vertical-align: middle;
justify-content: center;
padding: 1rem calc((100vw - 1300px) / 2)

`
const Heading = styles.h1`
    
    font-size : clamp(3rem , 5vw, 2rem);
    margin-bottom: 2rem;
    padding: 0 2rem;
`
const subHeading = styles.h3`
    text-align: start;
    font-size : clamp(3rem , 5vw, 2rem);
    
   
`

const Wrapper = styles.div`
    display : grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen (max-width: 768px){
        grid-template-columns: 1fr;

    }


    @media screen (max-width: 500px){
        grid-template-columns: 1fr;

    }
`


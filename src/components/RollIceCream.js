import React from 'react'
import styled from "styled-components"
import RollingImage from "../assets/images/RollingImage1.png"
import {Button} from "./styles/Button"
import { Fade } from "react-reveal";
import "./LiveVideo.css"



const RollIceCream = () => {
    return (
        <RollContainer>
            <Fade left duration={1300}>
            <ColumnLeftSide>
            <img className="RolledImage" src={RollingImage} style={{width: '80%'}} />
            </ColumnLeftSide>
            </Fade>
            <Fade right duration={1300}>
            <ColumnRightSide>
            <HowRollWork>
                   
                            <h1 style={{fontWeight: 'bold'}}>THIS IS HOW WE ROLL</h1>
                            <p color="black">The art of rolling delicious ice cream is a sight to see.
                             Experience tasty, unique ice cream made before your very eyes! The ice cream is made by pouring a base of sweet milk on an extremely cold (-35°C) steel surface that resembles a pizza pan to Westerners.
                            </p>
                        

                       
             </HowRollWork>
             
            </ColumnRightSide>
            </Fade>
        </RollContainer>
    )
}

export default RollIceCream

const RollContainer = styled.div`
display: grid;
grid-template-columns: 1.3fr 1fr;
margin-right:20px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 468px){
        grid-template-columns: 1.3fr;
    }
`

const ColumnLeftSide = styled.div
`
`

const ColumnRightSide = styled.div
`
`


const HowRollWork = styled.div`
padding-top: 1rem;
margin-right: 10px;
margin-top: 3rem;
padding-right: 2rem;

@media screen and (max-width: 468px){
    
    align-item: center;
    justify-content: center;
}



h1{
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-size: italic;

    @media screen and (max-width: 468px){
        font-size: 2.5rem;
        margin-left: 3rem;
        text-align: center;
    }

}

p{
    font-size: 1.2rem;

    margin-top: 2rem;
    margin-right:10px;
   
    @media screen and (max-width: 468px){
        font-size: 1rem;
        text-align: center;
        margin-left : 3rem;
    }
}
`


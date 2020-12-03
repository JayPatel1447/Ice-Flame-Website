import React from 'react'
import ReactPlayer from 'react-player/youtube'
import "./LiveVideo.css"
import styled from "styled-components"




const LiveVideo = () => {
    return (
        


        <ControllerClass>
            <Columnleft>
            <AboutUs>
            <h1 style={{fontWeight: 'bold', textAlign: 'center', marginTop: '2rem'}}>NEVER HAD ROLLED ICECREAM?</h1>
                <p style={{marginLeft: '20px' ,marginTop: '20px', fontWeight: 'inherit'}}> Histry behind Rolled Icecream is Thailand. Rolled ice cream is a sensational Thai frozen dessert. Unlike most ice creams made ahead of time in an electronic ice cream machine, rolled ice cream also known as Tawa ice cream is made to order by hand. <br></br><br></br> Providing the city of Brampton a unique experience with the Best in All Tawa Roll Ice Cream
along with a variety of MilkShakes, Falooda, Juices, and Paan's
If you have a sweet-tooth, we are your one-stop-solution </p>
                                 </AboutUs>
            </Columnleft>

            <ColumnRight  className="player-wrapper">

                
                                 <ReactPlayer className="react-player " width= "100%" height="70%" controls={true}  url="https://youtu.be/FYPZbeNEKmw"  />

            </ColumnRight>
        </ControllerClass>

    )
}

export default LiveVideo

const ControllerClass = styled.div`
    margin-top: 5rem;
    align-item: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        height: 100%;
        
    }
`

const Columnleft = styled.div`
// overflow:hidden;
// padding-bottom:56.25%;
// position:relative;
// height: 100%;

// @media screen and (max-width: 768px){
//     grid-template-columns: 1fr ; 
//     overflow: hidden;
//     height: 100%;
// }

`

const ColumnRight = styled.div`

@media screen and (max-width: 468px){
       margin-top: 3rem;
    }

`

const AboutUs = styled.div
`
p{
    font-size: 1.2rem;

    margin-top: 2rem;
    margin-right:10px;
   
}

`

import React from 'react'
import styled from 'styled-components'
import Styled from "styled-components"
import { Button } from './styles/Button'
import Video from "../assets/videos/BackgroundVideo.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
       <HeroContainer>
           <HeroBg>
               <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
           </HeroBg>
           <HeroContent>
           <HeroItems>
            <HeroH1>Life is like an Ice Cream</HeroH1>
            <Herop> Enjoy before it Melts</Herop>
            {/* <Button style={{width : "min-content", marginLeft: "38%"}} primary="true" big="true" round="true" to="/"> Taste It</Button> */}
          
            <FollowUs>

<a href="https://www.youtube.com/c/jaypatel1447"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="4x"  />
    </a>
    <a href="https://www.facebook.com/iceflame.brampton/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="4x" />
        </a>
        <a href="https://www.instagram.com/iceflame.brampton/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
</FollowUs>


           </HeroItems>

        
           </HeroContent>
       </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0C0C0C;
    display : flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff

    :before{
        content: "";
        postion : absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0% , transparent 100%  );
    }

`


const HeroBg = styled.div`
    position : absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    
`

const HeroContent = styled.div`

    z-index: 3;
    height: calc(100vh- 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 3);

`

const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;
text-align: center;
height:100vh;
max-height: 100%;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`
const HeroH1 = styled.h1`
font-size: clamp(1.5rem, 4vw, 4rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;


`
const Herop = styled.p`
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;

`

const FollowUs  = styled.div
`
    margin-top: 2rem;
    padding: 25px 50px;

    a.social{
        margin: 0 1rem;
        transition: transform 250ms;
        display: inline-block;
    }
    a.social:hover {
        transform: translateY(-2px);
      }

      a.youtube {
        color: #eb3223;
      }
      
      a.facebook {
        color: #4968ad;
      }
      
      a.twitter {
        color: #49a1eb;
      }
      
      a.instagram {
        color: red;
      }
      
`

//rafce


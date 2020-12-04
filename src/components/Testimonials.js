import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckMarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import  {useStaticQuery, graphql} from "gatsby"
import { Fade } from "react-reveal";


const Testimonials = () => {

    const data = useStaticQuery(graphql`
    
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)/"}, 
          name: {in: ["Icecream5", "Icecream6"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      

    `)

    return (
        <TestomonialsContainer>
            <TopLine>
                Testomonialsss
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            {/* <Fade right duration={1300}> */}
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                    <FaRegLightbulb css={`color:#3fffa8; font-size: 2rem; margin-bottom: 1rem`} />
                            <h3>Dipen Solanki</h3>
                            <p>Such a tasty group of deserts they have developed. 
                                I have tried many items by them and I loved them all.
                                 Simply amazing. I recommend this for  everyone who is crazy 
                                 for deserts. 
                            </p>
                       
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color:#f9b19b; font-size: 2rem; margin-bottom: 1rem`}/>
                            <h3>Jay Patel</h3>
                            <p>This place is a must try! Loved the menu and all the icecreams we
                                 tried were delicious! Would 
                                 definitely recommend this place to my friends and family! Definitely coming back again!
                            </p>
                        
                    </Testimonial>
                    <Testimonial>
                    <FaRegLightbulb css={`color:#3fffa8; font-size: 2rem; margin-bottom: 1rem`} />
                            <h3>Dipen Solanki</h3>
                            <p>Such a tasty group of deserts they have developed. 
                                I have tried many items by them and I loved them all.
                                 Simply amazing. I recommend this for  everyone who is crazy 
                                 for deserts. 
                            </p>
                       
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                     ) )}
                </ColumnTwo>
            </ContentWrapper>
            {/* </Fade> */}
        </TestomonialsContainer>
      
    )
}

export default Testimonials

const TestomonialsContainer = styled.div`
width: 100%;

padding: 0rem calc((100vw - 1300px)/2);
height:100;
margin-bottom: 150px;
`
const TopLine = styled.p`
color: #077Bf1;
font-size: 3rem;
padding-left: 2rem;
margin-bottom: 0.75rem;

`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-size: italic;
    }

    p{
        color: gray;
    }

`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }

`

const Images = styled(Img)`
border-radius: 10px;
height: 100%;
filter: brightness(120%);
`


import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from "gatsby"
import Img from 'gatsby-image'
import {ImLocation} from "react-icons/im"
import { Fade } from "react-reveal";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IceFlameMenu from "../assets/images/IceFlame.pdf";
import Button from "./styles/Button.js"


export class DownloadLink extends React.Component {
    render() {
        return (
            <form method="get" action={this.props.src}>
                <button style={{background: '#F26A2E', whiteSpace: 'nowrap', padding: '16px', color: '#fff', fontSize: '20px', outline: 'nonde', minWidth: '100px', cursor: 'pointer', textDecoration: 'none', transition: '0.3 !important', borderRadius: '20px'}}  type="submit">{this.props.children}</button>
            </form>
        )
    }

    
}


const Flavours = ({headings}) => {
    
    const data = useStaticQuery(
        graphql`
        query FlavourQuery{
            allFlavoursJson{
                edges {
                    node {
                      alt
                      name
                      img {
                        publicURL
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
            }
        }
        `
    )

    function getFlavour(data) {
        const FlavoursArray = []
        data.allFlavoursJson.edges.forEach((item, index) => {
            FlavoursArray.push(
                <ProductCard key={index}>
                    <ProductImg src={item.node.img.childImageSharp.fluid.src}
                    fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                                     <ProductTitle>{item.node.name}</ProductTitle>
                            
                        </TextWrap>
                    </ProductInfo>
                </ProductCard>
            )
        } )

        return FlavoursArray
    } 


    return (
        <div>
              
            <ProductContainer>
                <ProductHeading>{headings}</ProductHeading>
                <Fade left duration={1300}>
                    <ProductWrapper>{getFlavour(data)}</ProductWrapper>
                      </Fade>

                      <NavBtn>
                 <DownloadLink src={IceFlameMenu} style={{fontSize: '26px'}} primary="true" round="true" to="/contact"> 
                        Menu 
                </DownloadLink>
            </NavBtn>
                     
            </ProductContainer>
            
            
          
        </div>
    )
}

export default Flavours

const ProductContainer = styled.div`

    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2) ;
   
    color: #fff;
`

const ProductHeading = styled.div`

    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000

`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;
    
    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }


`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition : 0.2s case;
    
`
const ProductImg = styled(Img)`
    height: 90%;
    position : relative;
    max-width: 100%;
    border-radius: 20px;
    filter: brightness(80%);
    transition : 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
display: flex;
flex-direction : column;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px){
    padding: 0 1rem;
}
`

const TextWrap = styled.div`
    display:flex;
    align-items: center;
    position :  absolute;
    top: 370px;
`

const ProductTitle = styled.div`

font-weight: 400px;
font-size: 1rem;
margin-left: 0.5rem;
`

const NavBtn = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

 
  @media screen and (max-width: 768px){
    display : none;
  }
`

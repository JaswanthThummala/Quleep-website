import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";


import BackgroundImg from "../../assets/pictures/Flag.jpg";
import { Logo2 } from "../../components/logo2";
import { Marginer } from "../../components/marginer";
import { DownArrow } from "../../components/downarrow";
import { Button } from "../../components/button";
import { Navbar } from "../../components/navbar";


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  

`;



const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fffff;
  margin: 0;
  text-align: center;
`;

const styleObj = {
  color: "#fd5800"
}

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
 const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
    return (<Element name="topSection">
    <TopContainer>
        <BackgroundFilter>
        <Navbar />
        <Marginer direction="vertical" margin="12em" />
          <MotivationalText>Make <div style ={styleObj} >A SELF-RELIANT INDIA</div></MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <a href="https://www.arnxt.com/" target="_blank" title="ARnxt.com"><Button  >Exlpore Now</Button></a>
           <Logo2 />
          <DownArrowContainer onClick={scrollToNextSection} >
            <DownArrow />
          </DownArrowContainer>
          
        </ BackgroundFilter>
        </ TopContainer>
        </Element>

    )
    };
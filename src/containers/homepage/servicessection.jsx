import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectiontitle";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourservice";
import Service1Img from "../../assets/illustrations/Service1Img.jpg";
import Service2Img from "../../assets/illustrations/Service2Img.png";
import Service3Img from "../../assets/illustrations/Service3Img.jpg";
import Service4Img from "../../assets/illustrations/Service4Img.jpg";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

`;



export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>BEST QUALITY SOFTWARE </SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Experiential Commerce"
        description="3D models and AR bring spatial depth to your shoppers' pre
        purchase digital product evaluation."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Software-as–a-Service"
        description=" ❖ApplicationDevelopment  ❖System Integration
        ❖Testing & QualityAssurance ❖EmergingTechnology"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Managed Services"
        description="a) Infrastructure Management b) Application Management
        c) Shared Services"
        imgUrl={Service3Img}
      />
       <OurSerivce
        title="Mobility / Social Intelligence"
        description="1. Digital Media Mgmt
        2. Ideas
        3. Storytelling
        4. Design
        5. Consulting "
        imgUrl={Service4Img}
        isReversed
      />

      </ServicesContainer>
  );
      
}
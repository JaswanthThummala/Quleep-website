import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectiontitle";

import AboutImgUrl from "../../assets/illustrations/Lastone.jpg";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 450px;
  height: 300px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>About Quleep</SectionTitle>
      <AboutContainer>
        <AboutText>
          Quleep is about designing, building and deliverying best quality
           for your home or Office. {<br />}
          {<br />} We make sure that you get the best Quality inferstracture.
           In the today's world, as business becomes more challenging, organizations
need to re-engineer their Services & Solutions and need to be flexible and
nimble to meet an ever-changing business anticipation and require a
broad-based and incorporated capacity - not only in skills but across
capabilities, types of engagements and service delivery models.
          {<br />}
          {<br />} So wether you are handling thousands of places to 
          or you’re just starting out, you are in the right place.
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}

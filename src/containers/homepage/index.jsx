import React from "react";
import styled from "styled-components";
import { ServicesSection } from "./servicessection";
import { TopSection } from "./topsection";
import { ReviewsSection } from "./reviewssection";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { Footer } from "../../components/footer";


const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  `;

export function Homepage(props) {
    return <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="5em" />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="10em" />
      <ReviewsSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
      </PageContainer>
}
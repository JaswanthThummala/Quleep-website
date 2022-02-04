import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectiontitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/PP1.png";
import User2Img from "../../assets/pictures/PP2.png";
import User3Img from "../../assets/pictures/PP3.png";
import User4Img from "../../assets/pictures/PP4.png";

const ReviewsContainer = styled(Element)`
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #FF0000;
    border: none;
    outline: none;
    postion: relative;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #0000FF;
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>ABOUT US</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 245}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" Quleep is a result driven Organization with Extended Sector knowledge and
              experience in Product / service consultancy, Software/ Product
              development, IT Staffing / Managed Service providing end to end services
              and solutions to various Fortune 500 clients."
              username="ULEEP"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" “Save money to help people live better”.
              “Create best Market in the heart of employees and sellers”
              Customer obsession rather than competitor focus.
              Commitment to operational excellence
Invent, Simplify & Think big
Long-term vision to earn Trust"
              username="ALUE"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" Our staff has a spectacular mix of providing solutions which will help any organization develop the
              strategies and implement the system that's performance and provides value for the business.We may assist you 
              to improve the productivity of your business"
              username="ECHNOLOGY"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" “God has created a unique designer piece in you, Now
              its your turn to create a designer world around you”.
              .Visualize how products will look and
              how well they will fit in your home or
              office environment.The future of shopping is Connected, Virtual & Augmented."
              username="Rnxt"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}

import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 3em;
  
  
`;

const ServiceImg = styled.img`
  width:  30em;
  height: 17em;


`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;



`;

const Title = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight: 700;
  margin: 5px 0;

`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 25px;
  text-align: center;
  max-width: 70%;

                                            
`;

export function OurSerivce(props) {
  const { imgUrl, title, description, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
}

import React from "react";
import styled, { css } from "styled-components";

import QuleepLogo from "../../assets/logo/logo.png";
import { theme } from "../../theme";


const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
 
  
`;

const LogoImg = styled.img`

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-leftt: 8px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 3.2em;
      height: 4.2em;
      
    `};
`;

const LogoText = styled.div`
margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fffff" : theme.primary)};
  font-weight:600;
`;




  export function Logo(props) {
    const { inline, small } = props;
  
    return (
      <LogoContainer inline={inline} small={small}>
        <LogoImg  src={QuleepLogo} inline={inline} small={small} />
        <LogoText  inline={inline} small={small}>
          Quleep Pvt Ltd
        </LogoText>
      </LogoContainer>
    );
  }
import React from "react";
import styled from "styled-components";

import QuleepLogo from "../../assets/logo/logo.png";
import { theme } from "../../theme";



const LogoContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg2 = styled.img`
  width: 3.2em;
  height: 5em;
  `;

  const LogoText2 = styled.div`
  font-size: 40px;
  color: ${theme.primary};

`;

export function Logo2(props) {
  const { inline, small } = props;

  var topRight = {
    position: 'absolute',
    bottom: '30px',
    right: '45px',
    
  };

  var imgRight = {
    position: 'absolute',
    bottom: '80px',
    right: '80px',
    
  };

  return (
    <LogoContainer2 inline={inline} small={small}>
      <LogoImg2 style={imgRight} src={QuleepLogo}/>
      <LogoText2 style={topRight} >
       Quleep 
      </LogoText2>
    </LogoContainer2>
  );
}
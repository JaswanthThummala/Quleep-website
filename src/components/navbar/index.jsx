import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Logo } from "../logo";



const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const LoginButton = styled(Button)`
  background-color: #fd5800;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: #fffff;
  }
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
display: flex;
  flex-direction: row;
                                            `;



export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button  small>Get Started</Button>
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton small>Login/Register</LoginButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

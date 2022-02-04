import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: #fd5800;
  color: #fffff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  align-items: center;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
    color: #fff;
   
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}  >{props.children}</ButtonWrapper>;
}
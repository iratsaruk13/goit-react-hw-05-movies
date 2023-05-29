import styled from "styled-components";

export const ButtonGoBack = styled.button`
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 20px;
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: inset 2px 2px 3px #dca7f7;
  margin: 15px;
  :hover {
    background-color: #000000;
    color: #ffffff;
  }
  svg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover svg {
    scale: 1.2;
  }
`;

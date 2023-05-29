import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  color: #52016d;
  &:hover,
  &:focus {
    border: 1px solid #a942d9;
  }
  padding: 15px;
  /* width: 100%; */
  background-color: #e9d8f9;
  &:hover {
    background-color: #ddaaeb;
  }
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 0 0 5px rgba(96, 0, 118, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 64px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  svg {
    width: 30px;
    height: 30px;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover svg {
    scale: 1.2;
  }
`;

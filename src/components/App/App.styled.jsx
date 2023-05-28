import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3e3f4;
`;

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  z-index: 10;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgb(64, 4, 88);
  background: linear-gradient(
    90deg,
    rgba(64, 4, 88, 1) 0%,
    rgba(153, 38, 187, 1) 35%,
    rgba(110, 118, 223, 1) 60%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export  {Container, Header}
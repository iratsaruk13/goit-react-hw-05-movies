import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const MovieWrapper = styled.div`
  color: #c6dcef;
  font-size: 20px;
`;
export const MovieTitle = styled.h2`
  color: aliceblue;
  margin: 10px;
  text-align: center;
  font-size: 28px;
`;
export const MovieInfo = styled.p`
  color: #c6dcef;
  font-size: 18px;
`;

export const MovieSubtitle = styled.h3`
  font-size: 24px;
  color: aliceblue;
  margin: 10px;
  text-align: center;
`;

export const AdditinalLink = styled(Link)`
  font-size: 24px;
`;

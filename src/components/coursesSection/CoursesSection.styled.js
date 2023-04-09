import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 60px;

  @media only screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0;
    padding-bottom: 60px;
    justify-content: center;
  }
`;

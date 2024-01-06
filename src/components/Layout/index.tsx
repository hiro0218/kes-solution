import styled from '@emotion/styled';

export const MainContainer = styled.main`
  margin: 10rem auto 4.5rem;
  max-width: 1120px;

  @media screen and (max-width: 767px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;

export const Section = styled.section`
  padding: 10rem 4rem;

  @media screen and (max-width: 767px) {
    padding: 5rem 1rem;
  }

  & + & {
    margin-top: 2.5rem;
  }
`;

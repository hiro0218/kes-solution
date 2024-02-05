import styled from '@emotion/styled';

export const MainContainer = styled.main`
  max-width: 1120px;
  min-height: calc(100vh - 6rem);
  margin: 0 auto 4.5rem;

  @media screen and (max-width: 767px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const Section = styled.section`
  padding: 10rem 2rem;

  @media screen and (max-width: 767px) {
    padding: 5rem 0.5rem;
  }

  & + & {
    margin-top: 2.5rem;
  }
`;

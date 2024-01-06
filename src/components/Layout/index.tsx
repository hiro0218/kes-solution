import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 10rem 4rem;

  @media screen and (max-width: 767px) {
    padding: 5rem 1rem;
  }

  & + & {
    margin-top: 40px;
  }
`;

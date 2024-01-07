import styled from '@emotion/styled';

export const PageHeading = styled.h2`
  padding: 2rem 0;
  font-weight: 900;
`;

export const LeadParagraph = styled.p`
  line-height: 2;
  letter-spacing: 0.04em;

  & + & {
    margin-top: 1em;
  }
`;

export const PageSection = styled.section`
  padding: 0 64px;

  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
`;

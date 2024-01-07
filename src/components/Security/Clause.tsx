import styled from '@emotion/styled';

const List = styled.ol`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-position: inside;
  list-style-type: decimal;
  counter-reset: item;
`;

const Item = styled.li`
  padding-left: 1.5em;
  text-indent: -1.5em;

  & + & {
    margin-top: 0.5em;
  }
`;

export const Clause = {
  List,
  Item,
};

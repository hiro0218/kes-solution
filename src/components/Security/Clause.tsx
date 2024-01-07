import styled from '@emotion/styled';
import { gray } from '@radix-ui/colors';

const List = styled.ol`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-position: inside;
  list-style-type: decimal;
  counter-reset: item;
`;

const Item = styled.li`
  padding-left: 3ch;
  text-indent: -3ch;

  &::marker {
    color: ${gray.gray12};
    font-weight: 700;
  }

  & + & {
    margin-top: 0.5em;
  }

  b {
    color: ${gray.gray12};
    font-weight: 700;
  }
`;

export const Clause = {
  List,
  Item,
};

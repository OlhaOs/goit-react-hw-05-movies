import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  color: rgba(86, 44, 133, 0.7);

  &:hover {
    color: rgba(86, 44, 133, 1);

    font-weight: 700;
  }
`;
export const ArrowSvg = styled.span`
  display: flex;
`;

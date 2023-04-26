import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 10px;

  text-decoration: none;
  font-weight: 500;
  color: black;


  &:hover {
    color: rgba(86, 44, 133, 0.8);
    font-weight: 700;
  }
`;
export const ArrowSvg = styled.span`
  display: flex;
`;

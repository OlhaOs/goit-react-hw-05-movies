import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 0 8px 12px;
  margin-bottom: 16px;

  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(57, 16, 103, 0.8);
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgba(118, 82, 159, 0.8);
  }
`;

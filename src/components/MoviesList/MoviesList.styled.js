import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Section = styled.section`
  padding: 10px;

  margin: 10px 0;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  margin-left: 15px;
  margin-bottom: 10px;
  text-decoration: none;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  text-decoration: none;
  font-weight: 400;
  color: black;

  &:hover {
    color: rgba(86, 44, 133, 0.8);
    font-weight: 700;
  }
`;

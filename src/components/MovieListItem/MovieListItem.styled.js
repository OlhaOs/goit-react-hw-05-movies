import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 10px;

  margin: 10px 0;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const Card = styled.div`
  display: flex;
  gap: 20px;
  max-height: 300px;
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Overview = styled.h3`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Genres = styled.h4`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const AddInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  margin-left: 15px;
  margin-bottom: 10px;
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

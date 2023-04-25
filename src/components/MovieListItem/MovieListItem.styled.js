import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid grey;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding-bottom: 10px;
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
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

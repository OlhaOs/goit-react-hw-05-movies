import styled from 'styled-components';

export const Section = styled.section`
  padding: 10px;

  margin: 10px 0;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const CastImg = styled.img`
  width: 100px;
  margin-top: 20px;
  border-radius: 4px;
`;
export const PlaceholderImg = styled.img`
  width: 100px;
  margin-top: 50px;
  border-radius: 4px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;

  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3 - 20px);

  border-radius: 4px;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const Text = styled.p`
  margin-top: 0;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;
export const TextName = styled.p`
  margin-top: 10px;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

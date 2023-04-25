import styled from 'styled-components';

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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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

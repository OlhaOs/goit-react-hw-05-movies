import styled from 'styled-components';

export const Section = styled.section`
  padding: 10px;

  margin: 10px 0;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const Input = styled.input`
  padding: 8px 0 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 2px;

  &::placeholder {
    color: rgba(118, 82, 159, 0.8);
    font-size: 16px;
  }
  outline: none;
  border: 1px solid rgba(118, 82, 159, 0.8);
  border-right: none;
  &:hover {
    border: 1px solid white;
  }
`;
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: rgba(118, 82, 159, 0.8) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  color: rgba(57, 16, 103, 0.8);
  background-color: rgba(118, 82, 159, 0.8);
  border: 2px solid rgba(118, 82, 159, 0.8);

  &:hover {
    background-color: rgba(118, 82, 159, 1);
    color: white;
  }
`;
export const Notification = styled.p`
  color: rgba(118, 82, 159, 0.8);
  font-size: 20px;
  margin-left: 30px;
  text-align: center;
`;
export const Query = styled.span`
  color: rgba(118, 82, 159, 1);
  font-size: 20px;
  font-weight: bold;
`;

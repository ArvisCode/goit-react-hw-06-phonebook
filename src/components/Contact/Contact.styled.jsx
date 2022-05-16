import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: #0084ff;
  color: #fff;

  margin-right: 30px;
  padding: 15px;
`;

export const Number = styled.p`
  font-weight: 700;
  margin-right: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  padding: 0px;

  border: none;
  background-color: #fff;
  color: rgb(111, 111, 207);

  cursor: pointer;
  transition: color 250ms linear;

  :hover,
  :focus {
    color: rgb(111, 111, 207);
  }
`;

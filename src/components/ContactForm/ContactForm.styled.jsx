import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.span`
  font-weight: 700;
  padding: 10px;
`;

export const Input = styled.input`
  height: 40px;
  width: 800px;
  padding: 5px 10px;

  font-size: 14px;
  color: #000;

  outline: none;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;

  :focus {
    border-color: rgb(111, 111, 207);
  }

  ::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const Button = styled.button`
  margin: 40px;
  height: 50px;
  width: 200px;

  font-size: 24px;
  color: #fff;
  background-color: rgb(111, 111, 207);
  border: none;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: #0084ff;
  }
`;

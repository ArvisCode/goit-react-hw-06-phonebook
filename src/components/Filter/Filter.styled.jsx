import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin: 5px;
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

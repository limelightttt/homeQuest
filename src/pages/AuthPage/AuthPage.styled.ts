import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  padding: 0 calc((100vw - 400px) / 2); // плавный отступ от краёв

  @media (max-width: 420px) {
    padding: 0 16px; 
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;
  color: #111111;
  background-color: #ffffff;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #000000;
  }

  &::placeholder {
    color: #999999;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const ErrorText = styled.p`
  color: #e53935;
  font-size: 14px;
  margin-top: -10px;
`;

export const LinkText = styled.p`
  color: #000000;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  transition: text-decoration 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;



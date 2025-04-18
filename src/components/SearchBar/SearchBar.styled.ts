import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem 1rem;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  width: 90%;
  max-width: 600px;
  margin: clamp(1rem, 4vw, 2rem) auto 0 auto;
`;

export const Input = styled.input`
  flex: 1;
  padding: 14px 16px;
  border: none;
  border-radius: 40px;
  outline: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #333;
  background-color: transparent;

  &::placeholder {
    color: #9ca3af;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  background: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: transform 0.2s ease;

  ${Button}:hover & {
    transform: scale(1.1);
  }
`;

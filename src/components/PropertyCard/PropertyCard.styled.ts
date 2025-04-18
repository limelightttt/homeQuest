import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e4e8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background: #fff;
  max-width: 320px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Price = styled.p`
  margin: 0 16px 12px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

export const Button = styled.button`
  margin: 12px 16px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #ff5a5f;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e0484d;
  }
`;


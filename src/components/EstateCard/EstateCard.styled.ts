import styled from "styled-components";

export const EstateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EstateInfo = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
`;

export const EstateTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333333;
`;

export const EstatePrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`;

export const FavoriteButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: #1a73e8;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0d47a1;
  }
`;

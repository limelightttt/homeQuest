import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: calc(1rem + 0.8vw);
  color: #222;
  font-weight: 700;
  margin: 0;
  flex: 1;
  text-align: left;

  span {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: calc(1rem + 0.5vw);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FavoritesButton = styled.button`
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5a5f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #222;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;


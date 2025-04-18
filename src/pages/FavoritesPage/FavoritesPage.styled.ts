import styled from "styled-components";

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7fafc;
  font-family: 'Poppins', sans-serif;
  color: #2d3748;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 1rem;
  background-color: #f2f2f2;
`;

export const HeaderButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e0484d;
  }
`;


export const Content = styled.main`
  flex: 1;
  padding: 2rem 3rem;
  background-color: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-top: 2rem;
  transition: all 0.3s ease;
  overflow-y: auto;
  max-height: calc(100vh - 160px); 
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const BackButton = styled.button`
  padding: calc(0.5rem + 0.5vw) calc(1rem + 1vw);
  font-size: clamp(0.8rem, 1.5vw, 1.1rem); 
  font-weight: 600;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e0484d;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #2c5282;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;


export const NoFavoritesMessage = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #718096;
  font-weight: 600;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1.5rem;
`;

export const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
`;

export const FavoriteItem = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;


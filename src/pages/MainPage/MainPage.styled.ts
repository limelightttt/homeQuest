import styled from "styled-components";
import photo from "../../assets/photo5.jpg";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 0;
  width: 100%;
  height: clamp(300px, 50vh, 500px);
  text-align: center;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  h2 {
    font-size: clamp(1.4rem, 4vw, 2.5rem);
    font-weight: bold;
    line-height: 1.4;
    margin: 0;
    max-width: 80%;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    display: inline-block;
    position: relative;
    z-index: 2;
  }
`;

export const SloganText = styled.h2`
  font-size: clamp(1.4rem, 4vw, 2.5rem);
  font-weight: 600;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const Content = styled.main`
  flex: 1;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
`;


export const SearchBarWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
`;




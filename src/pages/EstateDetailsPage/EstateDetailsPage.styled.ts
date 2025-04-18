import styled from "styled-components";
import Slider from "react-slick";

export const EstateDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #fff;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

export const EstateTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #222;
  text-align: center;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 800px;
  margin-bottom: 24px;

  .slick-prev,
  .slick-next {
    width: 45px;
    height: 45px;
    z-index: 10;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 35px;
    color: #222;
  }
`;

export const EstateInfo = styled.div`
  text-align: left;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
`;

export const EstatePrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const EstateDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.6;
`;

export const EstateLocation = styled.p`
  font-size: 20px;
  color: green;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 24px;
`;

export const ActionButton = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  background-color: black;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: #ff5a5f;
  }
`;

export const FavoriteButton = styled(ActionButton)<{ isFavorite: boolean }>`

  color:#1a73e8;
  background-color: ${({ isFavorite }) => (isFavorite ? "#ffffff" : "#ffffff")};

  &:hover {
    background-color: ${({ isFavorite }) => (isFavorite ? "#ffffff" : "#ffffff")};
    color: #023e8a;
  }
`;






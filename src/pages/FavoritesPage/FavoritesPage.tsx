import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { EstateCard } from "../../components/EstateCard/EstateCard";
import {
  BackButton,
  Content,
  FavoritesWrapper,
  NoFavoritesMessage,
  Title,
  FavoritesList,
  FavoriteItem,
} from "./FavoritesPage.styled";
import { Header } from "../FavoritesPage/FavoritesPage.styled";
import { Logo } from "../../components/Header/Header.styled";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const goToMainPage = () => navigate("/main");

  return (
    <FavoritesWrapper>
      <Header>
      <Logo><span>Home</span>Quest</Logo>
        <BackButton onClick={goToMainPage}>Back to Main</BackButton>
      </Header>
      <Content>
        <Title>Your Favorite Properties</Title>

        {favorites.length === 0 ? (
          <NoFavoritesMessage>It's empty here. Add something from the catalog!</NoFavoritesMessage>
        ) : (
          <FavoritesList>
            {favorites.map((estate) => (
              <FavoriteItem key={estate.id}>
                <EstateCard estate={estate} />
              </FavoriteItem>
            ))}
          </FavoritesList>
        )}
      </Content>
    </FavoritesWrapper>
  );
};



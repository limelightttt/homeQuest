import { useNavigate } from "react-router-dom";
import {
  MainWrapper,
  Content,
  CardsGrid,
  SloganWrapper,
  SloganText,
  SearchBarWrapper, 
} from "./MainPage.styled";
import { useEffect, useState } from "react";
import { fetchEstates } from "../../store/api/estateApi";
import { IEstate } from "../../store/api/types";
import { EstateCard } from "../../components/EstateCard/EstateCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { HeaderButton, Header } from "../FavoritesPage/FavoritesPage.styled";
import { Logo } from "../../components/Header/Header.styled";

interface IMainPageProps {
  onLogout: () => void;
}

export const MainPage = ({ onLogout }: IMainPageProps) => {
  const navigate = useNavigate();
  const goToFavorites = () => navigate("/favorites");

  const [filteredEstates, setFilteredEstates] = useState<IEstate[]>([]);
  const [estates, setEstates] = useState<IEstate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEstates = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchEstates();
        setEstates(data);
        setFilteredEstates(data);
      } catch (error) {
        console.error("Error loading data:", error);
        setError("Error loading data.");
      } finally {
        setLoading(false);
      }
    };

    loadEstates();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = estates.filter((estate) => {
      const matchesQuery =
        (typeof estate.title === "string" &&
          estate.title.toLowerCase().includes(query.toLowerCase())) ||
        (Array.isArray(estate.location) &&
          estate.location.some((loc) =>
            loc.name.toLowerCase().includes(query.toLowerCase())
          ));
      return matchesQuery;
    });

    setFilteredEstates(filtered);
  };

  return (
    <MainWrapper>
      <Header>
        <Logo><span>Home</span>Quest</Logo>
        <HeaderButton onClick={goToFavorites}>Favorites</HeaderButton>
        <HeaderButton onClick={onLogout}>Logout</HeaderButton>
      </Header>

      <SloganWrapper>
        <SloganText>
          <h2>
            Finding your perfect home made simple
            <br />
            — with the tools and insights you need to make the best choice.
          </h2>
        </SloganText>

        
        <SearchBarWrapper>
          <SearchBar onSearch={handleSearch} />
        </SearchBarWrapper>
      </SloganWrapper>

      <Content>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && filteredEstates.length === 0 && (
          <p>No properties found.</p>
        )}
        <CardsGrid>
          {!loading &&
            !error &&
            filteredEstates.map((estate) => (
              <EstateCard key={estate.id} estate={estate} />
            ))}
        </CardsGrid>
      </Content>
    </MainWrapper>
  );
};

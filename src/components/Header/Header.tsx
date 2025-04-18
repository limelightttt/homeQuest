import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  NavButtons,
  LogoutButton,
  FavoritesButton,
} from "./Header.styled";

interface IHeaderProps {
  onLogout: () => void;
}

export const Header = ({ onLogout }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo>
        Home<span>Quest</span>
      </Logo>
      <NavButtons>
        <FavoritesButton onClick={() => navigate("/favorites")}>
          Favorites
        </FavoritesButton>
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </NavButtons>
    </HeaderWrapper>
  );
};



import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IEstate } from "../../store/api/types";
import { RootState } from "../../store/store";
import { addToFavorites, removeFromFavorites } from "../../store/slices/favoriteSlice";
import { toast } from "react-toastify";
import {
  EstateCardWrapper,
  ImageWrapper,
  EstateInfo,
  EstateTitle,
  EstatePrice,
  FavoriteButton,
} from "./EstateCard.styled";

interface EstateCardProps {
  estate: IEstate;
}

export const EstateCard = ({ estate }: EstateCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = favorites.some((fav) => fav.id === estate.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(estate.id));
      toast.info("Removed from favorites 🗑️");
    } else {
      dispatch(addToFavorites(estate));
      toast.success("Added to favorites ❤️", {
        type: "info",
      });
    }
  };

  const handleNavigate = () => {
    navigate(`/estate/${estate.id}`);
  };

  return (
    <EstateCardWrapper onClick={handleNavigate}>
      <ImageWrapper>
        <img src={estate.coverPhoto?.url} alt={estate.title} />
      </ImageWrapper>
      <EstateInfo>
        <EstateTitle>{estate.title}</EstateTitle>
        <EstatePrice>{estate.price.toLocaleString()}د</EstatePrice>
        <FavoriteButton onClick={handleToggleFavorite}>
          {isFavorite ? "❤️ Remove" : "🤍 Add to favorites"}
        </FavoriteButton>
      </EstateInfo>
    </EstateCardWrapper>
  );
};


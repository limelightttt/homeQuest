import { IProperty } from "../../data/properties";
import { Card, Image, Title, Price, Button } from "./PropertyCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToFavorites, removeFromFavorites } from "../../store/slices/favoriteSlice";
import { toast } from "react-toastify";
import { IEstate } from "../../store/api/types";

interface IPropertyCardProps {
  property: IProperty;
}

export const PropertyCard = ({ property }: IPropertyCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === property.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(property.id));
      toast.info("Removed from favorites 🗑️");
    } else {
      const estate: IEstate = {
        id: property.id,
        title: property.title,
        price: property.price,
        coverPhoto: { url: property.image },
        area: 0, 
        type: "info", 
      };

      dispatch(addToFavorites(estate));
      toast.success("Added to favorites ❤️");
    }
  };

  return (
    <Card>
      <Image src={property.image} alt={property.title} />
      <Title>{property.title}</Title>
      <Price>{property.price.toLocaleString()}$</Price>
      <Button onClick={handleToggleFavorite}>
        {isFavorite ? "❤️ Remove" : "🤍 Add to favorites"}
      </Button>
    </Card>
  );
};


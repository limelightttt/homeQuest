import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

import { IEstate } from "../../store/api/types";
import { RootState } from "../../store/store";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/favoriteSlice";

import {
  EstateDetailsWrapper,
  EstateTitle,
  StyledSlider,
  EstateInfo,
  EstatePrice,
  EstateDescription,
  EstateLocation,
  ButtonGroup,
  ActionButton,
  FavoriteButton,
} from "./EstateDetailsPage.styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "https://bayut.p.rapidapi.com/properties/detail";
const API_KEY = import.meta.env.VITE_API_KEY;

const EstateDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const [estate, setEstate] = useState<IEstate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isFavorite = favorites.some((fav) => fav.id === estate?.id);

  useEffect(() => {
    const fetchEstateDetails = async () => {
      try {
        const response = await fetch(`${API_URL}?externalID=${id}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          },
        });

        if (!response.ok) {
          throw new Error("Error loading data");
        }

        const data = await response.json();
        setEstate(data);
      } catch (error) {
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchEstateDetails();
  }, [id]);

  const handleToggleFavorite = () => {
    if (!estate) return;

    if (isFavorite) {
      dispatch(removeFromFavorites(estate.id));
      toast.info("Deleted from favorites 🗑️");
    } else {
      dispatch(addToFavorites(estate));
      toast.success("Added to favorites ❤️", {
        type: "info",
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!estate) return <p>Listing not found</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <EstateDetailsWrapper>
      <EstateTitle>{estate.title}</EstateTitle>

      <StyledSlider {...sliderSettings}>
        {estate.photos?.map((photo, index) => (
          <div key={index}>
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        ))}
      </StyledSlider>

      <EstateInfo>
        <EstatePrice>Price: {estate.price}د</EstatePrice>

        <EstateDescription>
          {DOMPurify.sanitize(estate.description ?? "", {
            ALLOWED_TAGS: [],
            ALLOWED_ATTR: [],
          })}
        </EstateDescription>

        <EstateLocation>
          <span>
            📍 Location: {estate.location?.map((loc) => loc.name).join(", ")}
          </span>
        </EstateLocation>
      </EstateInfo>

      <ButtonGroup>
        <ActionButton onClick={() => navigate(-1)}>Back</ActionButton>
        <FavoriteButton isFavorite={isFavorite} onClick={handleToggleFavorite}>
          {isFavorite ? "Remove ❤️" : "🤍 Add to favorites"}
        </FavoriteButton>
      </ButtonGroup>
    </EstateDetailsWrapper>
  );
};

export default EstateDetailsPage;

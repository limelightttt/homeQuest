import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEstate } from "../../store/api/types";


interface FavoriteState {
  favorites: IEstate[];
}

const loadFavoritesFormStorage = (): IEstate[] => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};


const initialState: FavoriteState = {
  favorites: loadFavoritesFormStorage(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IEstate>) => {
      const isAlreadyInFavorite = state.favorites.some(
        (estate) => estate.id === action.payload.id
      );
      if (!isAlreadyInFavorite) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (estate) => estate.id !== action.payload
      );

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});


export const {addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
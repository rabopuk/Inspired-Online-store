import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice.js";
import colorReducer from "./features/colorSlice.js";
import goodsReducer from "./features/goodsSlice.js";
import productSlice from "./features/productSlice.js";
import favoritesSlice from "./features/favoritesSlice.js";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productSlice,
  favorites: favoritesSlice,
});

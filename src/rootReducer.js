import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice.js";
import colorReducer from "./features/colorSlice.js";
import favoritesReducer from "./features/favoritesSlice.js";
import goodsReducer from "./features/goodsSlice.js";
import navigationReducer from "./features/navigationSlice.js";
import productReducer from "./features/productSlice.js";
import searchReducer from "./features/searchSlice.js";
import statusServerReducer from "./features/statusServerSlice.js";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  search: searchReducer,
  statusServer: statusServerReducer,
});

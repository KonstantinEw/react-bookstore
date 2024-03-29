import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { persistor, store } from "./store";
import { feachSearchBooks } from "./slices/searchSlice";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBook } from "./selectors/getBookSelector";
import { feachGetBooks } from "./slices/bookSlice";
import {
  fetchRegisterUser,
  fetchResetPassword,
  fetchSignIn,
  fetchSignOut,
  fetchUpdateUser,
} from "./slices/userSlice";
import { orderBooks } from "./selectors/orderSelector";
import {
  addOrder,
  decrementQuantity,
  deleteOrder,
  getTotal,
  incrementQuantity,
} from "./slices/orderSlice";
import { favoriteBooks } from "./selectors/favoriteBooksSelector";
import { addFavorite, deleteFavorite } from "./slices/faviriteSlice";
import { getUser } from "./selectors/userSelectors";

export {
  store,
  useAppDispatch,
  useAppSelector,
  fetchNewBooks,
  getNewBooks,
  feachSearchBooks,
  getSearchBooks,
  getBook,
  favoriteBooks,
  feachGetBooks,
  orderBooks,
  addOrder,
  deleteOrder,
  persistor,
  decrementQuantity,
  incrementQuantity,
  addFavorite,
  deleteFavorite,
  getTotal,
  getUser,
  fetchRegisterUser,
  fetchSignIn,
  fetchUpdateUser,
  fetchSignOut,
  fetchResetPassword,
};

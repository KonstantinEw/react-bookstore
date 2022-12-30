import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { persistor, store } from "./store";
import { feachSearchBooks } from "./slices/searchSlice";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBook } from "./selectors/getBookSelector";
import { feachGetBooks } from "./slices/bookSlice";
import { removeUser, setUser } from "./slices/userSlice";
import { orderBooks } from "./selectors/orderSelector";
import { addOrder, decrementQuantity, deleteOrder, incrementQuantity } from "./slices/orderSlice";

export {
  store,
  useAppDispatch,
  useAppSelector,
  fetchNewBooks,
  getNewBooks,
  feachSearchBooks,
  getSearchBooks,
  getBook,
  feachGetBooks,
  setUser,
  removeUser,
  orderBooks,
  addOrder,
  deleteOrder,
  persistor,
  decrementQuantity,
  incrementQuantity,
};

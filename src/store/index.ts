import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getNewBooks } from "./selectors/newBooksSelectors";
import { fetchNewBooks } from "./slices/newBooksSlice";
import { store } from "./store";
import { feachSearchBooks } from "./slices/searchSlice";
import { getSearchBooks } from "./selectors/searchBooksSelectors";
import { getBook } from "./selectors/getBookSelector";
import { feachGetBooks } from "./slices/bookSlice";

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
};

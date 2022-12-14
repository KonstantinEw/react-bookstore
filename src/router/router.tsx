import { Auth, Layout } from "components";
import {
  AuthPage,
  FavoritesPage,
  ResetPage,
  NewBooksPage,
  NotFoundedPage,
  OrderPage,
  ProfilePage,
  SearchPage,
} from "pages";
import { GetBookPage } from "pages/GetBookPage/GetBookPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Layout />}>
      <Route index element={<NewBooksPage />} />
      <Route path={ROUTE.DETAILS} element={<GetBookPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGNUP} element={<AuthPage />} />
      <Route path={ROUTE.RESETPASS} element={<ResetPage />} />
      <Route element={<Auth />}>
        <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SHOP_BAG} element={<OrderPage />} />
      </Route>

      <Route path="*" element={<NotFoundedPage />} />
    </Route>,
  ),
);

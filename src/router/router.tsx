import { Layout, NewBooks } from "components";
import { AuthPage, FavoritesPage, ProfilePage, SearchPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Layout />}>
      <Route index element={<NewBooks />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SHOP_BAG} element={<FavoritesPage />} />
      <Route path={ROUTE.SINGUP} element={<AuthPage />} />
    </Route>,
  ),
);

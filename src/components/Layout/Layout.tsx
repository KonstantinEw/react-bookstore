import { Footer, Header } from "components";
import { SearchPage } from "pages";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector, getSearchBooks, feachSearchBooks } from "store";
import { Wrapper } from "ui";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, getSearchBooks, feachSearchBooks } from "store";

export const SearchPage = () => {
  const [params, setParams] = useState({
    searchValue: "",
    page: "",
  });
  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector(getSearchBooks);
  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [dispatch, params]);

  return <></>;
};

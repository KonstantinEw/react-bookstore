import { BookDescription, Loader } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { feachGetBooks, getBook, useAppDispatch, useAppSelector } from "store";

export const GetBookPage = () => {
  const params = useParams();
  const [opsions] = useState({ isbn13: `${params.isbn13}` });
  const { result, isLoading } = useAppSelector(getBook);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachGetBooks(opsions));
  }, [dispatch, opsions]);

  return <section>{isLoading ? <Loader /> : <BookDescription book={result} />}</section>;
};

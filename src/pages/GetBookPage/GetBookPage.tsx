import { BookDescription, Loader, Title } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { feachGetBooks, getBook, useAppDispatch, useAppSelector } from "store";

export const GetBookPage = () => {
  const params = useParams();
  console.log(params);
  const [opsions] = useState({ isbn13: `${params.isbn13}` });
  const { result, isLoading, error } = useAppSelector(getBook);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feachGetBooks(opsions));
  }, [dispatch, opsions]);

  return (
    <section>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <BookDescription result={result} />
        </>
      )}
    </section>
  );
};

import { useInput } from "hooks";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, getSearchBooks, feachSearchBooks } from "store";

export const SearchPage = () => {
  const { value, onChange } = useInput();
  const [params, setParams] = useState({
    searchValue: "",
    page: "",
  });
  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector(getSearchBooks);
  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [dispatch, params]);
  const { books, page, error, total } = result;
  const handleParams = () => {
    setParams({ searchValue: "java", page: "1" });
  };

  console.log(books);

  return (
    <section>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <input value={value} onChange={onChange} type="search" />
          <button onClick={handleParams}>go</button>
        </div>
      )}
    </section>
  );
};

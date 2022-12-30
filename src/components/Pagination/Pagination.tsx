import { StyledNextButton, StyledPrevButton } from "assets";
import { useState } from "react";
import { Button, StyledPagination } from "./styles";

interface IProps {
  total: string;
}

export const PaginatedItems = ({ total }: IProps) => {
  const ITEMS_PER_PAGE = 10;
  const pages = Math.ceil(+total / 10);
  const [itemOffset, setItemOffset] = useState(1);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const handleSetPage = (event: { selected: any }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % pages;
    setItemOffset(newOffset);
  };

  return (
    <>
      <StyledPagination
        breakLabel="..."
        nextLabel={
          <Button>
            <StyledNextButton />
          </Button>
        }
        pageRangeDisplayed={3}
        previousLabel={
          <Button>
            <StyledPrevButton />
          </Button>
        }
        pageCount={pages}
        className="paginaton"
        marginPagesDisplayed={1}
        onPageChange={handleSetPage}
      />
    </>
  );
};

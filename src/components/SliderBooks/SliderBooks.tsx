import { BookListItem } from "components";
import { Spinner } from "components/Loader/styles";
import Slider from "react-slick";
import { getNewBooks, useAppSelector } from "store";
import { SliderWrapper, Title } from "./styles";

export const SliderBooks = () => {
  const { isLoading, results } = useAppSelector(getNewBooks);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 6,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <Title>New Releases Books</Title>
      <Slider {...settings}>
        {isLoading ? (
          <Spinner />
        ) : (
          results.books.map((book) => {
            return <BookListItem key={book.isbn13} book={book} />;
          })
        )}
      </Slider>
    </SliderWrapper>
  );
};

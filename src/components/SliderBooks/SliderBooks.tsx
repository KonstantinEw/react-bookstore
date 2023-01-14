import { BookListItem } from "components";
import Slider from "react-slick";
import { IBook } from "types";
import { SliderWrapper, Title } from "./styles";

interface IProps {
  title: string;
  books?: IBook[];
}

export const SliderBooks = ({ books, title }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    speed: 500,
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
      <Title>{title}</Title>
      <Slider {...settings}>
        {books &&
          books.length > 0 &&
          books.map((book) => {
            return <BookListItem key={book.isbn13} book={book} />;
          })}
      </Slider>
    </SliderWrapper>
  );
};

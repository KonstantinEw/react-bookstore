interface IProps {
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  key: string;
  isbn13: string;
}

export const BookItem = ({ image, price, subtitle, title, url }: IProps) => {
  return (
    <figure>
      <div>
        <img src={image} alt={title} />
      </div>
      <a href={url}>{title}</a>
      <p>{subtitle}</p>
      <div>
        <span>{price}</span>
        <span></span>
      </div>
    </figure>
  );
};

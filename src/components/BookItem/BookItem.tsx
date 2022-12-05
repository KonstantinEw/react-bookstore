interface IProps {
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  key: string;
}

export const BookItem = ({ image, price, subtitle, title, url }: IProps) => {
  return (
    <a href={url}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div>
        <span>{price}</span>
        <span></span>
      </div>
    </a>
  );
};

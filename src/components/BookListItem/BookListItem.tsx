interface IProps {
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  isbn13: string;
}

export const BookListItem = ({
  image,
  title,
  url,
  subtitle,
  price,
}: IProps) => {
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

interface IProps {
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export const Post = (props: IProps) => {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} />
      <p>{props.subtitle}</p>
      <a href={props.url}></a>
      <span>{props.price}</span>
    </div>
  );
};

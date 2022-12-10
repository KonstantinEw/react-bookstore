import { Color } from "./colors";

export const randomColor = () => {
  const color = [Color.Blue, Color.Green, Color.Orange, Color.Purple];
  const random = Math.floor(Math.random() * color.length);
  return color[random];
};

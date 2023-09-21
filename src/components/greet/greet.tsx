import { GreetProps } from "./greet.types";

export const Greet = ({ name }: GreetProps) => {
  return <div>hello {name ? name : "Guest"}</div>;
};

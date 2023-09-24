import { useState } from "react";
import { UseCountProps } from "./useCounter.types";

export const useCounter = ({ initialCount = 0 }: UseCountProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

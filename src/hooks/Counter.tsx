import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const decreaseCount = () => {
    setCounter(counter - 1);
  };
  return { counter, increaseCount, decreaseCount };
};

export { useCounter };

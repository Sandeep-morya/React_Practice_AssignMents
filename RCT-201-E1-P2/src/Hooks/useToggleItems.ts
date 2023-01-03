import React from "react";
const useToggleItems = (list: string[]): [string, () => void] => {
  const [item, setItem] = React.useState(list[0]);
  const listRef = React.useRef<number>(0);

  const toggle = () => {
    const temp = listRef.current + 1;
    listRef.current = temp > list.length - 1 ? 0 : temp;
    setItem(list[listRef.current]);
  };

  return [item, toggle];
};

export default useToggleItems;

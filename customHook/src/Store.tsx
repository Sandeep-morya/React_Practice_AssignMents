import React, { useEffect } from "react";
import { useAPI } from "./Hooks/useAPI";

const Store = () => {
  const [list, error, isLoading, Fetch] = useAPI({
    url: `https://fakestoreapi.com/products`,
    method: "GET",
  });
  useEffect(() => {
    Fetch();
  }, []);
  console.log(list);
  if (error) {
    console.log("error");
  }
  if (isLoading) {
    return <>...Loading</>;
  }
  return <div>Store</div>;
};

export default Store;

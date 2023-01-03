import axios, { AxiosResponse } from "axios";
import { useState } from "react";
interface responseType {
  id: boolean;
  title: string;
  price: 109.95;
  description: string;
  image: string;
  rating: { rate: boolean; count: boolean };
}

interface optionType {
  url: string;
  method: string;
}

type hookType = [responseType[] | [], boolean, boolean, () => Promise<void>];

export const useAPI = (options: optionType): hookType => {
  const [list, setList] = useState<responseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const Fetch = async () => {
    try {
      const { data }: AxiosResponse<responseType[]> = await axios(options);
      setList(data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setError(true);
    }
  };
  return [list, error, isLoading, Fetch];
};

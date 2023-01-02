import axios, { AxiosResponse } from "axios";
import { objType, todoType } from "../App";

export const getTodos = async () => {
  const { data }: AxiosResponse<todoType[]> = await axios.get(
    `http://localhost:3000/todos`
  );
  return data;
};

export const postTodo = async (item: objType) => {
  const { data }: AxiosResponse<todoType> = await axios.post(
    `http://localhost:3000/todos`,
    item
  );
  return data;
};

export const deleteTodo = async (id: number) => {
  const { data }: AxiosResponse<todoType> = await axios.delete(
    `http://localhost:3000/todos/${id}`
  );
  return data;
};

export const editTodo = async <S, T>(id: S, body: T) => {
  const { data }: AxiosResponse<todoType> = await axios.patch(
    `http://localhost:3000/todos/${id}`,
    body
  );
  return data;
};

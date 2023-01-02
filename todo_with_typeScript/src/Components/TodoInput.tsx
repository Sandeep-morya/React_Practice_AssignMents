import { FC, ReactNode, useState } from "react";
interface propsType {
  placeholder?: string;
  children?: ReactNode;
  handleAdd: (text: string) => void;
}
const TodoInput = (props: propsType) => {
  const [text, setText] = useState("");
  //-->  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleClick =
    (/* params:React.MouseEvent<HTMLButtonElement, MouseEvent> */) => {
      props.handleAdd(text);
      setText("");
    };
  return (
    <div className='inputBox'>
      <input
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        //--> by Default it is getiing its type which is mentioned in line no.8
      />
      <button onClick={handleClick}>ADD TODO</button>
    </div>
  );
};

export default TodoInput;

import React from "react";
import { MyContext } from "../Contexts/MyContext";
interface InputBoxType {
  placeholder: string;
}
const InputBox = ({ placeholder }: InputBoxType) => {
  const [text, setText] = React.useState("");
  const { dispatch } = React.useContext(MyContext);
  return (
    <div>
      <input
        type={"text"}
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: text })}>
        Change Name
      </button>

      {/* as we cannot send string while changing the name so we need to convert it to Number */}
      <button
        onClick={() => dispatch({ type: "CHANGE_AGE", payload: Number(text) })}
      >
        Change Age
      </button>
    </div>
  );
};

export default InputBox;

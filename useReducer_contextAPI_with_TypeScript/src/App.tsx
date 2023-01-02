import React from "react";
import InputBox from "./Components/InputBox";
import { MyContext } from "./Contexts/MyContext";


const App = () => {
  const {state}=React.useContext(MyContext);
  return (
    <div>
      <InputBox placeholder={"Enter New Name"} />
      <h1>Name: {state.name} </h1>
      <h2>Age: {state.age}</h2>
    </div>
  );
};

export default App;

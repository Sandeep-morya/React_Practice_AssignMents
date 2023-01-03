import useToggleItems from "./Hooks/useToggleItems";
const App = () => {
  const [item, toggle] = useToggleItems(["A", "B", "C", "D", "E"]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{item}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default App;

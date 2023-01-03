import React from "react";

interface addCountryType {
  onAddCountry: (param: string) => void;
}

const AddCountry = ({ onAddCountry }: addCountryType) => {
  const [countryName, setCountryName] = React.useState("");

  const handleClick = () => {
    onAddCountry(countryName);
    setCountryName("");
  };
  return (
    <div className="addCountry">
      <h1>ADD COUNTRY</h1>
      <input
        type={"text"}
        value={countryName}
        placeholder={"ENTER COUNTRY NAME"}
        onChange={(e) => setCountryName(e.target.value.toUpperCase())}
      />
      <button disabled={countryName === ""} onClick={handleClick}>
        ADD COUNTRY
      </button>
    </div>
  );
};

export default AddCountry;

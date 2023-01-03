import React from "react";
import { tableDataType } from "../App";
interface AddCityType {
  onAdd: (param: tableDataType) => void;
  countriesData: string[];
}
const AddCity = ({ onAdd, countriesData }: AddCityType) => {
  const [cityName, setCityName] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("UNKNOWN");
  const handleClick = () => {
    const obj = {
      id: Date.now(),
      city: cityName,
      country: selectedCountry,
    };
    onAdd(obj);
    setCityName("");
  };
  const betterIt = (param: string): string => {
    const v1 = param.slice(0, 1).toUpperCase();
    return v1 + param.slice(1, param.length);
  };
  return (
    <div className="addCity">
      <h1>ADD CITY</h1>
      <input
        type={"text"}
        value={cityName}
        placeholder={'Enter City Name'}
        onChange={(e) => setCityName(betterIt(e.target.value))}
      />
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option hidden>Select Country</option>
        {countriesData.map((coutryName, i) => (
          <option key={i} value={coutryName}>
            {coutryName}
          </option>
        ))}
      </select>
      <button disabled={cityName===''} onClick={handleClick}>ADD CITY</button>
    </div>
  );
};

export default AddCity;

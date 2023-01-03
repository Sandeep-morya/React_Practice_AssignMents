import React, { useEffect } from "react";
import AddCity from "./Components/AddCity";
import AddCountry from "./Components/AddCountry";
import CityCountryTable from "./Components/CityCountryTable";
import { getItem, setItem } from "./Components/function";

export interface tableDataType {
  id: number;
  city: string;
  country: string;
}

const list = getItem<string[]>("countryName");
const initial = getItem<tableDataType[]>("countryCityTable");

/*  */

const App = () => {
  const [coutryList, setCountryList] = React.useState(list);
  const [tableData, setTableData] = React.useState(initial);

  useEffect(() => {
    setItem<string[]>("countryName", coutryList);
    setItem<tableDataType[]>("countryCityTable", tableData);
  }, [coutryList, tableData]);

  
  return (
    <div className="app">
      <AddCountry
        onAddCountry={(e) => {
          setCountryList([...coutryList, e]);
        }}
      />
      <AddCity
        onAdd={(e) => setTableData([...tableData, e])}
        countriesData={coutryList}
      />
      <CityCountryTable data={tableData} />
    </div>
  );
};

export default App;

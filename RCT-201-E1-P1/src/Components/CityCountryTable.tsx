import { tableDataType } from "../App";
interface CityCountryTableType {
  data: tableDataType[];
}
const CityCountryTable = ({ data }: CityCountryTableType) => {
  return (
    <table hidden={!data.length}>
      <thead>
        <tr>
          <th> S No. </th>
          <th> City </th>
          <th> Country </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((e,i) => (
          <tr key={e.id}>
            <td>{i+1}</td>
            <td>{e.city}</td>
            <td>{e.country}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr><th colSpan={3} >City Country Table</th></tr>
      </tfoot>
    </table>
  );
};

export default CityCountryTable;

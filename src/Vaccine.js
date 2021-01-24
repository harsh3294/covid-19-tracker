import React, { useEffect, useState } from "react";
import "./Vaccine.css";
import numeral from "numeral";

function Vaccine() {
  const [tableData, setTableData] = useState([]);
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth() + 1;
  // var yyyy = today.getYear() % 100;
  // today = mm + "/" + dd + "/" + yyyy;

  // const [date, setDate] = useState("1/23/21");
  // var date = "1/23/21";

  // CALCULATING YESTERDAY DATE
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  var dd = yesterday.getDate();
  var mm = yesterday.getMonth() + 1;
  var yyyy = yesterday.getYear() % 100;
  var date = mm + "/" + dd + "/" + yyyy;
  useEffect(() => {
    const getCountriesData = async () => {
      fetch(
        "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"
      )
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.timeline,
          }));
          setTableData(countries);
        });
    };

    getCountriesData();
  }, []);
  console.log(tableData);

  return (
    <div className="table">
      {tableData.map((data) => (
        <tr>
          <td>{data.name}</td>
          <td>
            <strong>{numeral(data.value[date]).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Vaccine;

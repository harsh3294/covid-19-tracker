import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import "./Total.css";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

export default function HeaderColumnsGrid() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70, align: "center", hide: true },
    {
      field: "country",
      headerName: "Country",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "totalCases",
      headerName: "Total Cases",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "newCases",
      headerName: "New Cases",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      // cellClassName: "super-app-country",
      cellClassName: (params) =>
        clsx("super-app", {
          positive: params.value > 0,
          country: params.value === 0,
        }),
    },
    {
      field: "newDeaths",
      headerName: "New Deaths",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      // cellClassName: "super-app-country",
      cellClassName: (params) =>
        clsx("super-app", {
          death: params.value > 0,
          country: params.value === 0,
        }),
    },
    {
      field: "totalDeaths",
      headerName: "Total Deaths",
      width: 140,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "newRecovered",
      headerName: "New Recovered",
      width: 160,
      align: "center",
      headerClassName: "super-app-theme--header",
      // cellClassName: "super-app-country",
      cellClassName: (params) =>
        clsx("super-app", {
          recovered: params.value > 0,
          country: params.value === 0,
        }),
    },
    {
      field: "totalRecovered",
      headerName: "Total Recovered",
      width: 160,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "activeCases",
      headerName: "Active Cases",
      width: 140,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "criticalCases",
      headerName: "Critical Cases",
      width: 150,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "casesPer1Million",
      headerName: "Cases/1M",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "deathsPer1Million",
      headerName: "Deaths/1M",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "totalTests",
      headerName: "Total Tests",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "testsPer1Million",
      headerName: "Tests/1M",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "activePer1Million",
      headerName: "Active/1M",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "recoveredPer1Million",
      headerName: "Recovered/1M",
      width: 160,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "criticalPer1Million",
      headerName: "Critical/1M",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
    {
      field: "Population",
      headerName: "Population",
      width: 130,
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-country",
    },
  ];
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const rows = data.map((country) => ({
            id: country.updated,
            country: country.country,
            totalCases: country.cases,
            newCases: country.todayCases,
            newDeaths: country.todayDeaths,
            totalDeaths: country.deaths,
            newRecovered: country.todayRecovered,
            totalRecovered: country.recovered,
            activeCases: country.active,
            criticalCases: country.critical,
            casesPer1Million: country.casesPerOneMillion,
            deathsPer1Million: country.deathsPerOneMillion,
            totalTests: country.tests,
            testsPer1Million: country.testsPerOneMillion,
            activePer1Million: country.activePerOneMillion,
            recoveredPer1Million: country.recoveredPerOneMillion,
            criticalPer1Million: country.criticalPerOneMillion,
            Population: country.population,
          }));
          //   setId(id + 1);
          setRows(rows);
        });
    };
    getCountriesData();
  }, []);
  const useStyles = makeStyles({
    root: {
      "& .super-app-theme--header": {
        backgroundColor: "rgba(255, 7, 0, 0.55)",
      },
      "& .super-app-country": {
        // backgroundColor: "rgb(245,245,245)",
        backgroundColor: "white",
        overflowWrap: "break-word",
        border: "0.5px solid rgba(0,0,0,0.1)",
        cursor: "pointer",
        outline: "none",
      },
      "& .super-app-country:focus": {
        outline: "none",
      },
      "& .super-app:hover": {
        cursor: "pointer",
      },
      "& .super-app:focus": {
        outline: "none",
      },
      "& .super-app.positive": {
        backgroundColor: "#FFEEAA",
        border: "0.5px solid rgba(0,0,0,0.1)",
        fontWeight: "600",
      },
      "& .super-app.country": {
        backgroundColor: "white",
        border: "0.5px solid rgba(0,0,0,0.1)",
      },
      "& .super-app.death": {
        backgroundColor: "rgba(255, 53, 53,0.5)",
        border: "0.5px solid rgba(0,0,0,0.1)",
        fontWeight: "600",
      },
      "& .super-app.recovered": {
        backgroundColor: "rgba(102, 255, 25,0.5)",
        border: "0.5px solid rgba(0,0,0,0.1)",
        fontWeight: "600",
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        rowsPerPageOptions={[100, 25, 10]}
        columns={columns}
        // pageSize={10}
        autoHeight="true"
        showToolbar
      />
    </div>
  );
}

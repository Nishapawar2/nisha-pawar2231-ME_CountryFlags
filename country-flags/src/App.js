import './App.css';

import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, [countries]);

  return (
    <div className="App">
      <div className="MainContainer">
        {countries.map((country) => {
          return (
            <div key={country.cca3} className="CardContainer">
              <img
                className="FlagImage"
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
              />
              <h2>{country.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

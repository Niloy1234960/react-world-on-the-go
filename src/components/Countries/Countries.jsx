import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ contriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("btn clickeddddd", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h2>Total countries: {countries.length}</h2>
      <h3>Total visited countries: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li
          key={country.cca3.cca3}
          >Visited Country common name: {country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ contriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlag = (flag) => {
    console.log("Flag btn clickedd", flag);
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

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
      <div className="visited-flags-container">
        <h3>Total visited flags: {visitedFlags.length}</h3>
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag} alt="Imgae"></img>)
        }
      </div>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>
            Visited Country common name: {country.name.common}
          </li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

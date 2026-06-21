import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ contriesPromise }) => {
  const countriesData = use(contriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div className="">
      <h2>Total countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} key={country.cca3.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

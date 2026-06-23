import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag}) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // 1st way
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // 2nd way
    setVisited(visited ? false : true);
    handleVisitedCountries(country)

    // 3rd way
    // setVisited(!visited)
  };
  return (
    <div>
      <div className={`country ${visited && "country-visited"}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <div className="country">
          <p>Country Common name: {country.name.common}</p>
          <p>Capital: {country.capital.capital}</p>
          <p>This countries region: {country.region.region}</p>
          <p>
            Language: {country.languages.languages.eng} and{" "}
            {country.languages.languages.jam}
          </p>
          <p>Population is: {country.population.population}</p>
          <p>
            Total area is: {country.area.area} it's{" "}
            {country.area.area > 300000 ? "Big Country" : "Small Country."}
          </p>
          <button onClick={handleVisited} className="btn">
            {visited ? "Visited" : "Not Visited"}
          </button>
          <button onClick={()=> {handleVisitedFlag(country.flags.flags.png)}} className="btn">Visited Flag</button>
        </div>
      </div>
    </div>
  );
};

export default Country;

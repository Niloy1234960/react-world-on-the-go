import "./Country.css";

const Country = ({ country }) => {
//   console.log(country);
  
  const handleVisited = ()=>{
    console.log("btn clicked");
  }
  
  return (
    <div className="country">
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
        <p>Total area is: {country.area.area} it's {country.area.area > 300000 ? "Big Country" : "Small Country."}</p>
        <button onClick={handleVisited} className="btn">No Visited</button>
      </div>
    </div>
  );
};

export default Country;

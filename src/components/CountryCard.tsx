import { Link } from "react-router"; // Correct import for React Router

const CountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
}: {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string[];
}): JSX.Element => {
  return (
    <Link to={`/country/${name}`} className="country-card">
      <img src={flag} alt={`${name} flag`} className="flag" />
      <div>
        <h3>{name}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;

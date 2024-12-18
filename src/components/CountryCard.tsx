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
    <Link
      to={`/country/${name}`}
      className="block bg-white dark:bg-darkblue shadow-md rounded-md"
    >
      <img
        src={flag}
        alt={`${name} flag`}
        className="w-full lg:h-[265px] object-cover rounded-t-md"
      />
      <div className="dark:text-white text-lverydarkblue pl-6 pt-6 pb-11">
        <p className="text-lg font-bold mb-3">{name}</p>
        <p>
          <strong>Population:</strong>{" "}
          <span className="font-extralight">{population.toLocaleString()}</span>
        </p>
        <p>
          <strong>Region:</strong>{" "}
          <span className="font-extralight">{region}</span>
        </p>
        <p>
          <strong>Capital:</strong>{" "}
          <span className="font-extralight">{capital.join(", ")}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;

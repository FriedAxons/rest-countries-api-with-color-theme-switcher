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
      to={`/country/${encodeURIComponent(name)}`}
      className="block bg-white dark:bg-darkblue shadow-lg rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <img
        src={flag}
        alt={`${name} flag`}
        className="w-full lg:h-[265px] h-[180px] object-cover rounded-t-md"
      />
      <div className="dark:text-white text-lverydarkblue pl-6 lg:pt-6 pt-7 pb-11">
        <h3 className="text-xl dark:font-bold font-extrabold lg:mb-3 mb-4">
          {name}
        </h3>
        <p className="lg:mb-0 mb-0.5">
          <strong>Population:</strong>{" "}
          <span className="dark:font-extralight font-light">
            {population.toLocaleString()}
          </span>
        </p>
        <p className="lg:mb-0 mb-0.5">
          <strong>Region:</strong>{" "}
          <span className="dark:font-extralight font-light">{region}</span>
        </p>
        <p className="lg:mb-0 mb-0.5">
          <strong>Capital:</strong>{" "}
          <span className="dark:font-extralight font-light">
            {capital.join(", ")}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;

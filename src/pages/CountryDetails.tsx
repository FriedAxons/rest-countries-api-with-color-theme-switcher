import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

interface CountryDetailsData {
  name: { common: string; official: string };
  flags: { svg: string };
  population: number;
  region: string;
  subregion: string;
  capital: string | null;
  tld: string[];
  currencies: { name: string }[];
  languages: { [key: string]: string };
  borders: string[];
}

const CountryDetails = (): JSX.Element => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<CountryDetailsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const BackArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-5 h-5 mr-3 fill-lverydarkblue dark:fill-white"
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
    </svg>
  );

  useEffect(() => {
    const fetchCountryDetails = async () => {
      if (!countryName) {
        setError("Country name is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<CountryDetailsData[]>(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryName
          )}`
        );
        setCountry(response.data[0]);
        setError(null);
      } catch {
        setError("Failed to load country details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (countryName) fetchCountryDetails();
  }, [countryName]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  if (!country) return <div>No country data found.</div>;

  return (
    <div className="mx-p lg:x-p">
      <div className="lg:py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center dark:bg-darkblue bg-white dark:text-white text-lverydarkblue dark:font-light text-sm font-normal py-2 px-7 lg:rounded-md rounded dark:shadow-md shadow-[0px_6px_10px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
        >
          <BackArrowIcon />
          Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-40">
        <img
          src={country.flags.svg}
          alt={`${country.name} flag`}
          className="w-full lg:w-1/2 lg:h-[535px] h-[250px] lg:object-cover shadow-xl"
        />

        <div className="dark:text-white text-lverydarkblue">
          {/* Country Name */}
          <h1 className="text-3xl font-bold mb-6 lg:pt-20 lg:pb-2">
            {country.name.common}
          </h1>

          {/* Two Columns for Country Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-28">
            {/* Left Column */}
            <div className="space-y-3">
              <p>
                <strong>Native Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital || "N/A"}
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <p>
                <strong>Top Level Domain:</strong> {country.tld.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.keys(country.currencies).join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="lg:flex lg:items-center lg:mt-16">
            <strong className="lg:mr-4 lg:pt-[14px]">Border Countries:</strong>
            <div className="flex flex-wrap lg:gap-2 gap-2.5 mt-4">
              {country.borders?.length > 0 ? (
                country.borders.map((border) => (
                  <span
                    key={border}
                    className="dark:bg-darkblue bg-white dark:text-white text-lverydarkblue text-sm font-light lg:py-1 lg:px-7 py-1.5 px-9 lg:rounded-sm rounded shadow-md"
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span className="dark:bg-darkblue bg-white dark:text-white text-lverydarkblue text-sm font-light lg:py-0.5 lg:px-7 py-1.5 px-9 lg:rounded-sm rounded shadow-md">
                  N/A
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

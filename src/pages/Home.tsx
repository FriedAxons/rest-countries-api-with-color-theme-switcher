import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import CountryCard from "../components/CountryCard";
import axios from "axios";

interface CountryCardData {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string[];
}

// Define the full API response type
interface CountryAPIResponse {
  name: { common: string }; // Common name of the country
  flags: { svg: string }; // Flag image URL
  population: number;
  region: string;
  capital: string | string[] | null; // Capital can be a string, an array, or null
}

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<CountryCardData[]>([]); // State for countries data
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<CountryAPIResponse[]>(
          "https://restcountries.com/v3.1/independent?status=true"
        );

        // Map the API response to only include the necessary data for the card
        const mappedCountries: CountryCardData[] = response.data.map(
          (country) => ({
            name: country.name.common,
            flag: country.flags.svg,
            population: country.population,
            region: country.region,
            capital: Array.isArray(country.capital)
              ? country.capital
              : [country.capital || "N/A"],
          })
        );
        setCountries(mappedCountries);
        console.log(mappedCountries); // Check if the data is being set correctly
      } catch (error) {
        console.error("Error fetching countries from API, falling back to local data:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
  );

  return (
    <main>
      <Filters
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-start lg:gap-20 gap-10 lg:pt-0 pt-2 lg:pb-0 pb-16 lg:x-p px-12">
        {filteredCountries.map((country) => (
          <div className="w-full lg:max-w-[383.7px]">
            <CountryCard
              key={country.name} // Each country needs a unique key
              name={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

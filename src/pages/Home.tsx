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
          "https://restcountries.com/v3.1/all"
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
      <div className="country-cards">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name} // Each country needs a unique key
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

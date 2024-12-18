import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import CountryCard from "../components/CountryCard";
import axios from "axios";

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        const fallbackData = await import("../data/data.json"); // Fallback to local data
        setCountries(fallbackData || []);
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
      <div className="">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital || ["N/A"]}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

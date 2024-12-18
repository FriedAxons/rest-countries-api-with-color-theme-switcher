import { useState, useEffect } from "react";
import Filters from "../components/Filters";
// import CountryCard from "../components/CountryCard";
// import axios from "axios";

const Home = (): JSX.Element => {
  // const [countries, setCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  // useEffect(() => {
  // })

  // const filteredCountries =

  return (
    <main>
      <Filters
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
    </main>
  );
};

export default Home;

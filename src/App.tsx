import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const App = (): JSX.Element => {
  return (
    <Router basename="/rest-countries-api-with-color-theme-switcher/">
      <div className="dark:bg-verydarkblue bg-lverylightgray min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:countryName" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

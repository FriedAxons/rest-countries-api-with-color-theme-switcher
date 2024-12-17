import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
// import Home from "./pages/Home";
// import CountryDetails from "./pages/CountryDetails";

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="dark:bg-verydarkblue bg-lverylightgray">
        <Header />
        {/* <Routes>
        </Routes> */}
      </div>
    </Router>
  );
};

export default App;

import { useState } from "react";

interface FiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({
  search,
  setSearch,
  region,
  setRegion,
}: FiltersProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="flex justify-between items-center mx-p lg:x-p lg:py-11">
      {/* Search Input with Icon */}
      <div className="relative w-full lg:w-[383.69px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
          className="w-full dark:bg-darkblue bg-white placeholder:text-sm placeholder-ldarkgray dark:placeholder-white dark:text-white text-lverydarkblue font-light py-3 pl-16 rounded-md shadow-md"
        />
        <img
          src="/rest-countries-api-with-color-theme-switcher/icons/magnifying-glass-solid.svg"
          alt="Search Icon"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>

      {/* Region Filter Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center  dark:bg-darkblue bg-white text-lverydarkblue dark:text-white py-3 rounded-md shadow-md"
          aria-haspopup="listbox"
          aria-expanded={showDropdown ? "true" : "false"}
        >
          {region || "Filter by Region"}
          <span className="ml-10">
            <img
              src={
                showDropdown
                  ? "/rest-countries-api-with-color-theme-switcher/icons/angle-down-solid.svg" // Down caret when open
                  : "/rest-countries-api-with-color-theme-switcher/icons/angle-up-solid.svg" // Up caret when closed
              }
              alt="Caret icon"
              className="w-4 h-3 dark:invert" // Adjust size and smooth transition
            />
          </span>
        </button>

        {showDropdown && (
          <div className="absolute top-full text-lverydarkblue dark:text-white mt-1 bg-white dark:bg-darkblue rounded-sm shadow-md">
            <ul role="listbox">
              {["Africa", "America", "Asia", "Europe", "Oceania"].map(
                (regionOption) => (
                  <li
                    key={regionOption}
                    role="option"
                    tabIndex={0}
                    onClick={() => {
                      setRegion(regionOption);
                      setShowDropdown(false);
                    }}
                  >
                    {regionOption}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;

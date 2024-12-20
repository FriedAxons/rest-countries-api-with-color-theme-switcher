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

  // Inline SVG for the magnifying glass icon
  const MagnifyingGlassIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-5 h-5 fill-ldarkgray dark:fill-white" // Use fill to control color in light/dark mode
    >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
  );

  // Inline SVG for the caret up icon
  const CaretUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-4 h-4 fill-lverydarkblue dark:fill-white" // Use fill to control color in light/dark mode
    >
      <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </svg>
  );

  // Inline SVG for the caret down icon
  const CaretDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-4 h-4 fill-lverydarkblue dark:fill-white" // Use fill to control color in light/dark mode
    >
      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  );

  return (
    <div className="flex justify-between items-center mx-p lg:x-p lg:py-11">
      {/* Search Input with Icon */}
      <div className="relative w-full lg:w-[660px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
          className="w-full dark:bg-darkblue bg-white placeholder:text-base placeholder-ldarkgray dark:placeholder-white dark:text-white text-lverydarkblue dark:font-light text-lg font-normal py-5 pl-20 rounded-md dark:shadow-md shadow-[0px_6px_10px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.08)] focus:outline-none"
        />
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlassIcon />
        </div>
      </div>

      {/* Region Filter Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex justify-between items-center lg:w-[250px] dark:bg-darkblue bg-white text-lverydarkblue dark:text-white dark:font-light font-medium text-base py-5 px-6 rounded-md dark:shadow-md shadow-[0px_6px_10px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
          aria-haspopup="listbox"
          aria-expanded={showDropdown ? "true" : "false"}
        >
          {region || "Filter by Region"}
          <span className="ml-10">
            {showDropdown ? <CaretDownIcon /> : <CaretUpIcon />}
          </span>
        </button>

        {showDropdown && (
          <div className="absolute top-full lg:w-[250px] text-lverydarkblue dark:text-white mt-1 bg-white dark:bg-darkblue dark:font-light text-base pb-4 pt-2 px-6 rounded-md shadow-md rounded-md shadow-md z-10">
            <ul role="listbox">
              {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                (regionOption) => (
                  <li
                    key={regionOption}
                    role="option"
                    tabIndex={0}
                    onClick={() => {
                      setRegion(regionOption);
                      setShowDropdown(false);
                    }}
                    className="mt-2 hover:cursor-pointer"
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

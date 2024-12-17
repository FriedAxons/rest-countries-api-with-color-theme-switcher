interface FiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({ search, setSearch, region, setRegion }: FiltersProps): JSX.Element => {
  return ()
}

export default Filters;
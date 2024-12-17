import ThemeToggle from "./ThemeToggle";

const Header = (): JSX.Element => {
  return (
    <header className="dark:bg-darkblue bg-white">
      <h1>Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;

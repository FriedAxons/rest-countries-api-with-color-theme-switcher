import ThemeToggle from "./ThemeToggle";

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center dark:text-white text-lverydarkblue dark:bg-darkblue bg-white py-7 lg:py-6 px-4 lg:x-p shadow-md">
      <h1 className="lg:text-xl font-extrabold">Where in the world?</h1>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

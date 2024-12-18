import ThemeToggle from "./ThemeToggle";

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center dark:text-white text-lverydarkblue dark:bg-darkblue bg-white pt-8 lg:pt-5 pb-8 lg:pb-5 mx-p lg:x-p shadow-md">
      <h1 className="text-xl font-extrabold">Where in the world?</h1>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

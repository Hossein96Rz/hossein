import ToggleDarkMode from "./ToggleDarkMode";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-white p-4 shadow-xl dark:bg-[#34495e] dark:shadow-white">
      <span className="text-xl font-bold text-black dark:text-white">
        Hossein
      </span>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
      </div>
    </header>
  );
}

export default Header;

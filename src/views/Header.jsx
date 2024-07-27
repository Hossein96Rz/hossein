import ToggleDarkMode from "../components/ToggleDarkMode";
import ToggleSideBar from "../components/ToggleSideBar";

function Header({ dictionary }) {
  return (
    <header className="flex h-20 items-center justify-between bg-white p-4 shadow-xl transition-all ease-linear dark:bg-[#34495e] dark:shadow-white">
      <span className="text-xl font-bold text-slate-800 dark:text-white">
        {dictionary.name}
      </span>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <ToggleSideBar />
      </div>
    </header>
  );
}

export default Header;

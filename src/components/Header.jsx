import ToggleDarkMode from "./ToggleDarkMode";
import ToggleSideBar from "./ToggleSideBar";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-white p-4 shadow-xl transition-all ease-linear dark:bg-[#34495e] dark:shadow-white">
      <span className="text-xl font-bold text-slate-800 dark:text-white">
        Hossein
      </span>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <ToggleSideBar />
      </div>
    </header>
  );
}

export default Header;

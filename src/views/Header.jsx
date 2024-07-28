import ToggleDarkMode from "../components/ToggleDarkMode";
import ToggleSideBar from "../components/ToggleSideBar";

function Header({ dictionary }) {
  return (
    <header className="flex h-20 items-center justify-between bg-white p-4 shadow-xl transition-all ease-linear dark:bg-[#34495e] dark:shadow-white">
      <p className="text-3xl font-black text-slate-800 dark:text-white">
        <span className="text-[#34495C] underline dark:text-[#557BA7]">
          {dictionary.name[0]}
        </span>
        {dictionary.name.slice(1)}
      </p>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <ToggleSideBar />
      </div>
    </header>
  );
}

export default Header;

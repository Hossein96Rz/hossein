import ToggleDarkMode from "../components/ToggleDarkMode";
import ToggleSideBar from "../components/ToggleSideBar";

function Header({ dictionary }) {
  return (
    <header className="fixed z-10 flex h-20 w-full items-center justify-between bg-white p-4 shadow-md transition-all ease-linear xl:hidden dark:bg-[#34495e] dark:shadow-gray-800">
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

function SkillBar({ title, amount }) {
  return (
    <div className="mb-8 w-full sm:w-1/2 sm:px-5">
      <span className="mb-3 inline-block text-base font-semibold dark:text-white">
        {title}
      </span>
      <div className="h-4 border border-[#7e7e7e] p-[2px] dark:border-[#555]">
        <div
          className={`h-full bg-[#34495e]`}
          style={{ width: `${amount}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;

interface SkillBarProps {
  title: string;
  amount: number;
}
function SkillBar({ title, amount }: SkillBarProps) {
  return (
    <div className="mb-8 w-full sm:w-1/2 sm:px-5">
      <span className="mb-3 inline-block text-base font-semibold dark:text-white">
        {title}
      </span>
      <div className="border-custom-text-light h-4 border p-[2px] dark:border-[#555]">
        <div
          className={`bg-custom-dark h-full`}
          style={{ width: `${amount}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;

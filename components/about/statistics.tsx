const statsData = [
  {
    count: "5+ Thousand",
    label: "ALERTS SENT SO FAR"
  },
  {
    count: "5+ Thousand",
    label: "USERS"
  },
  {
    count: "20+ Thousand",
    label: "CITIES"
  }
];

export const Statistics: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-44 w-full font-bold text-primary bg-primary-foreground max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-row flex-wrap gap-20 justify-center mb-0 max-md:mb-2.5 max-md:max-w-full">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            count={stat.count}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};



// Statistics Card
interface StatCardProps {
  count: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ count, label }) => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch my-auto min-w-[240px]">
      <div className="text-5xl">{count}</div>
      <div className="mt-2.5 text-base">{label}</div>
    </div>
  );
};
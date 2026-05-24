import { LucideProps } from "lucide-react";

type StatCardPropType = {
  stat: {
    value: string;
    label: string;
  };

  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;

  bg: string;
  color: string;
  fill?: string;
};

const StatCard = ({
  stat,
  Icon,
  bg,
  fill,
  color = "text-black dark:text-white",
}: StatCardPropType) => {
  return (
    <div className="bg-gray-50 border border-border rounded-xl p-6 hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`${bg} p-2 rounded-lg group-hover:scale-110 transition-all `}
        >
          <Icon className={`w-6 h-6 ${color} ${fill}`} />
        </div>

        <p className="text-2xl xl:text-3xl font-bold">{stat.value}</p>
      </div>

      <p className="text-muted-foreground font-medium mb-1 text-base md:text-sm xl:text-base">
        {stat.label}
      </p>
    </div>
  );
};

export default StatCard;

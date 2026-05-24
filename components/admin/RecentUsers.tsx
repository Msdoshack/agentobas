import { cn } from "@/lib/utils";
import { User } from "@/types/user";

type PropsType = {
  user: User;
};

const RecentUsers = ({ user }: PropsType) => {
  return (
    <div className="block">
      <div className="gap-4 p-4 rounded-lg hover:bg-accent transition-all group border border-border">
        <div className="flex justify-between items-center">
          <p className="text-gray-800">{user.name}</p>
          <p className="text-gray-800">{user.email}</p>

          <p
            className={cn(
              "text-xs",
              user.activated ? "text-green-600" : "text-orange-600",
            )}
          >
            {user.activated ? "verified" : "not verified"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentUsers;

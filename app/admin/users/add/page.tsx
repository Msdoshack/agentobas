import Heading from "@/components/admin/Heading";
import AddUserForm from "@/components/admin/users/AddUserForm";
import GoBackBtn from "@/components/GoBackBtn";

const page = () => {
  return (
    <div className="w-full py-8 pb-32">
      <GoBackBtn />
      <div className="max-w-2xl mx-auto">
        <Heading name="Add User" />
        <AddUserForm />
      </div>
    </div>
  );
};

export default page;

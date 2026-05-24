import LoginForm from "@/components/auth/LoginForm";

const page = () => {
  return (
    <div className="h-screen bg-[url('/property.jpeg')] bg-cover bg-center">
      <div className="backdrop-blur-xs bg-white/20 p-10 h-full flex items-center justify-center">
        <div className="w-96  bg-white p-4 rounded-md">
          <h1 className="text-center text-lg font-semibold">Login To IGOBAS</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;

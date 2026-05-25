import SignupForm from "@/components/auth/SignupForm";
import PageReady from "@/components/PageReady";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ reg_success: string }>;
}) => {
  const regSuccessful = (await searchParams).reg_success;

  const showToken = regSuccessful && regSuccessful === "true";

  return (
    <>
      <PageReady />
      <div className="h-screen bg-[url('/property.jpeg')] bg-cover bg-center">
        <div className="backdrop-blur-xs bg-white/20 p-10 h-full flex items-center justify-center">
          <div className="w-96  bg-white px-4 py-8 rounded-md">
            {showToken ? (
              <h1 className="text-center  font-semibold">
                Activate your account
              </h1>
            ) : (
              <h1 className="text-center  font-semibold">
                SignUp for <span className="font-bold">(IGOBAS)</span>
              </h1>
            )}
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

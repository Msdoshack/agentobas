type PropsType = {
  error: Error;
  reset: () => void;
  name: string;
};

const ErrorComponent = ({ error, reset, name }: PropsType) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-80 bg-slate-50 p-5 flex flex-col items-center gap-4 rounded-md">
        <p className="text-red-600 text-center">
          Failed to load {name}
          <br />
          {error.message}
        </p>
        <button onClick={reset} className="bg-gray-100 px-3 py-1 rounded-md">
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;

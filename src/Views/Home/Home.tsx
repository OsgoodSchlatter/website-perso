export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-fill w-[1000px] items-center">
        <div className="p-2 mt-2 rounded border-transparent bg-white px-4 py-2 font-medium text-blue-900 flex items-center">
          {" "}
          <div className="text-xl">Welcome to my website</div>
        </div>
        <div className="p-2 mt-2 rounded border-transparent bg-white px-4 py-2 font-medium text-blue-900 flex items-center">
          {" "}
          <div className="text-xl">Student at Telecom SudParis, France</div>
        </div>
        <div className="p-2 mt-2 rounded border-transparent bg-white px-4 py-2 font-medium text-blue-900 flex items-center">
          {" "}
          <div className="text-xl">
            Main fields of studies: Software Engineering, Cryptorgraphy, Energy
            & climate issues
          </div>
        </div>
      </div>
    </div>
  );
};

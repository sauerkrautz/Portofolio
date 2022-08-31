import React from "react";

const Main = () => {
  return (
    <div className="w-full flex flex-col font-[Poppins]">
      {/* <nav className="min-h-[10vh] w-full flex justify-between items-center px-8">
        <div className="font-sans">rizqi</div>
        <div className="flex gap-24 mr-8">
          <div className="font-sans">About</div>
          <div className="font-sans">Main</div>
          <div className="font-sans">Contact</div>
        </div>
      </nav> */}
      <div className="w-full min-h-[100vh] grid grid-cols-12 grid-rows-6">
        <div className="col-start-1 col-end-7 row-start-1 row-end-7 flex items-center justify-evenly">
          <div className="w-1/2 flex flex-col gap-4">
            <div className="font-[Poppins]">
              <p className="text-9xl font-sans font-bold subpixel-antialiased">
                Hello,
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 row-start-1 row-end-7 grid grid-cols-12 grid-rows-6 bg-blue-500">
          <div className="col-start-1 col-end-7 row-start-4 row-end-7 bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;

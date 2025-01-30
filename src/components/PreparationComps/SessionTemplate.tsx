import React from "react";

const SessionTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="template relative w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-screen z-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default SessionTemplate;

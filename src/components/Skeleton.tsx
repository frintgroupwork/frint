import React from 'react';

const SessionStartSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row w-1/2 mx-auto  justify-center items-center">
          <div className="flex flex-col justify-start gap-4 w-full sm:w-1/2">
            {/* Small text skeleton */}
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            
            {/* Large text skeleton */}
            <div className="space-y-2">
              <div className="h-6 w-64 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Button skeleton */}
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse mt-2" />
          </div>
          
          {/* Image skeleton - only shown on larger screens */}
          <div className="hidden sm:block">
            <div className="h-[150px] w-[250px] bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionStartSkeleton;

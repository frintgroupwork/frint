import React from 'react';

const LandingPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar Skeleton */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        {/* Logo skeleton */}
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
        
        {/* Nav items skeleton */}
        <div className="hidden md:flex space-x-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
        
        {/* Auth buttons skeleton */}
        <div className="flex space-x-4">
          <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />
          <div className="w-20 h-8 bg-blue-200 rounded animate-pulse" />
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <main className="container mx-auto px-6 py-12 flex justify-between items-center">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading skeletons */}
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse" />
          </div>
          
          {/* Subtext skeleton */}
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          
          {/* Buttons skeleton */}
          <div className="flex space-x-4 pt-4">
            <div className="w-32 h-10 bg-blue-200 rounded animate-pulse" />
            <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Right image skeleton */}
        <div className="hidden md:block w-1/2">
          <div className="w-[500px] h-[500px] rounded-full bg-blue-100 animate-pulse" />
        </div>
      </main>

      {/* Collaboration section skeleton */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse" />
          <div className="flex justify-center space-x-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-24 h-24 rounded-full bg-gray-200 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageSkeleton;
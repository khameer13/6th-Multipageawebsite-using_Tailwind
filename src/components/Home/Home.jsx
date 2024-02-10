import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-96 mx-auto"> {/* Adjusted max width to 500 pixels */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Welcome to Your Company</h2> {/* Adjusted text size */}
          <p className="mt-4 text-base lg:text-lg text-gray-600">We offer amazing services to meet your needs.</p> {/* Adjusted text size */}
        </div>
      </div>
    </main>
  </div>  
  );
}

export default Home;

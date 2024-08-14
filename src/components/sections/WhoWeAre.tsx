import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="bg-home2 bg-no-repeat bg-cover bg-center">
    <div className='container mx-auto pt-20'>
      <div className='text-center mb-8'>
        <h2 className='text-5xl mb-6 font-serif'>
          Who We Are
        </h2>
        <p className='text-gray-600 text-lg mx-auto max-w-prose pb-8 lg:pb-2'>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex justify-center pb-16 mr-4 ml-4">
        <div className="relative w-full max-w-6xl" style={{ paddingTop: '45%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pCbY3s9zvtU"
            title="Video Title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhoWeAre;

import React from 'react';
import AdviceCard from '../molecules/AdviceCard';
import Weight from '../../assets/Weight';
import Hammer from '../../assets/hammer';
import List from '../../assets/List'

const Advice = () => {
    const listOfAdvices = [
        "The best products start with Figma",
        "Design with real data",
        "Lightning fast prototyping",
        "Fastest way to organize",
        "Work at the speed of thought"
      ];

  return (
    <section className='bg-white py-12'>
    <div className='container mx-auto pt-20'>
        <div className='text-center'>
            <h2 className='text-5xl mb-6 font-serif'>
            Practice Advice
            </h2>
            <p className='text-gray-600 text-lg mx-auto max-w-prose'>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="m-6">
            <AdviceCard
                title="Frauds or Mislead"
                items={listOfAdvices}
                href="#"
                icon={<Weight />}
            />
            </div>
            <div className="m-6">
            <AdviceCard
                title="Bailes & Warrants"
                items={listOfAdvices}
                href="#"
                icon={<Hammer />}
            />
            </div>
            <div className="m-6">
            <AdviceCard
                title="Federal Drug Crimes"
                items={listOfAdvices}
                href="#"
                icon={<List />}
            />
            </div>
        </div>
    </div>
    </section>
  );
};

export default Advice;

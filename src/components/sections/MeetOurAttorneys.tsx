import React from 'react';
import EmployeeCard from '../molecules/EmployeeCard';

const MeetOurAttorneys = () => {

  return (
    <section className='bg-white py-12'>
        <div className='container mx-auto pt-20'>
            <div className='text-center'>
                <h2 className='text-5xl mb-6 font-serif text-center'>
                Meet Our Attorneys
                </h2>
                <p className='text-gray-600 text-lg mx-auto max-w-prose text-center lg:text-left p-2'>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="m-6">
                    <EmployeeCard
                        title="LAYER & CEO"
                        name='Ashley Fletcher'
                        image="https://igormunoz-photography.com/wp-content/uploads/2021/04/sesion-fotos-para-cv-linkedin.jpg"
                    />
                </div>
                <div className="m-6">
                    <EmployeeCard
                        title="CEO"
                        name='Avie Beaton'
                        image="https://karlacsphotography.com/wp-content/uploads/2020/03/MG_3442_2.jpg"
                    />
                </div>
                <div className="m-6">
                    <EmployeeCard
                        title="LAYER CIVIL LAW"
                        name='Rodney Stratton'
                        image="https://opem.b-cdn.net/wp-content/uploads/2021/10/asesori%CC%81a-para-curriculum-vitae.jpg"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default MeetOurAttorneys;

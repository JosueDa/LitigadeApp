import React from 'react';
import CommentCard from '../molecules/CommentCard';

const WhatClientSay = () => {

  return (
    <section className='bg-gray-200 py-12'>
        <div className='container mx-auto pt-20'>
            <div className='text-center'>
                <h2 className='text-5xl mb-6 font-serif'>
                What Clients Say
                </h2>
                <p className='text-gray-600 text-lg mx-auto max-w-prose'>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="m-6">
                    <CommentCard
                        title="Designer"
                        name='Regina Miles'
                        comment="Slate helps you see how many more days you need to work to reach your financial goal."
                        rating={5}
                        image="https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1"
                    />
                </div>
                <div className="m-6">
                    <CommentCard
                        title="Designer"
                        name='Regina Miles'
                        comment="Slate helps you see how many more days you need to work to reach your financial goal."
                        rating={4}
                        image="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-20.jpg"
                    />
                </div>
                <div className="m-6">
                    <CommentCard
                        title="Designer"
                        name='Regina Miles'
                        comment="Slate helps you see how many more days you need to work to reach your financial goal."
                        rating={3}
                        image="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhatClientSay;

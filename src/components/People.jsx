import React from 'react'
import data from './data';
{/* Here comes the people component */}

const People = () => (
  <section className='container mx-auto'>
    <div className="grid gap-2 lg:grid-cols-3">
                {data.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

  </section>
  
    
    
    
);


export default People
import React from 'react'
import data from './data';
{/* Here comes the people component */}

const People = () => (
  <section className='container mx-auto bg-graafika bg-no-repeat bg-cover'>
    <div className="grid gap-10 lg:grid-cols-3 pt-12">
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
                            <span className='text-primary'>_______________</span>
                            <h4 className='text-primary font-poppins'>{items.title2}</h4>
                            <h4 className='text-primary font-poppins'>{items.title3}</h4>
                            <h4 className='text-primary font-poppins'>{items.title4}</h4>
                            <p className="mb-2 leading-normal font-poppins text-primary">
                            {items.content}
                            </p>
                            <p className="mb-2 leading-normal text-primary">
                            {items.content2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

  </section>
  
    
    
    
);


export default People
import React from 'react'

const CategoriesRelate = () => {
  return (
    <div className='categorie-relate bg-pink-50 py-14'>
        <div className='container'>
            <h2 className='text-3xl text-center font-semibold pb-8'>Services Related To Digital Marketing</h2>
            <div className='xl:flex justify-center lg:pb-8 lg:grid md:grid sm:grid'>
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>SEO services</b></p>                              
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Music promotion</b></p>               
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Social media marketing</b></p>             
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Social Content</b></p>
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Influencer marketing</b></p>
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Spotify music promotion</b></p>
                    <p className=' mr-2 mb-6' style={{fontSize:'16px'}}> <b className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold'>Video marketing</b></p>
            </div>
            <div className='lg:flex justify-center pb-8 md:grid sm:grid'>
                <div className='pr-4 mb-6'>
                    <span className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold' style={{fontSize:'16px'}}>Shoutouts & Promotion</span>
                </div>
                <div className='pr-4'>
                    <span className='bg-gray-300 py-2 px-4 rounded-xl text-gray-500 font-bold' style={{fontSize:'16px'}}>Youtube marketing</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CategoriesRelate
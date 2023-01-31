import React from 'react'

const HomeLogo = () => {
    return (
        <div className=' home-logo bg-gray-200'>
            <div className="flex justify-evenly justify-items-center content-center items-center 2xl:px-40 xl:px-40 lg:px-28 md:px-16 sm:px-6 px-2 py-4 container logo" >
                <span  style={{fontSize:'18px',color:'#b5b6ba'}} className="font-medium title">Trusted by:</span>
                <p className="ml-1"><picture><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png" alt="facebook" /></picture></p>
                <p ><picture><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" alt="Google" /></picture></p>
                <p ><picture><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" alt="NETFLIX" /></picture></p>
                <p ><picture><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" alt="P&G" /></picture></p>
                <p ><picture><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" alt="PayPal" /></picture></p>

            </div>
        </div>

    )
}

export default HomeLogo
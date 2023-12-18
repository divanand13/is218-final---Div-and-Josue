import React from 'react'

const HeroNext = () => {
    return (
        <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src="/images/aboutus.jpg"/>
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">About Us</h2>
                    <p className="leading-relaxed">Founded by two college friends with a shared passion for baking and entreprenuership.</p>
                    
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="/images/location.jpg"/>
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Location</h2>
                    <p className="leading-relaxed">TheDonutDen is in service at NJIT! Come stop by at 250 Central Avenue.</p>
                   
                  </div>
                </div>
              </div>
            </div>
    )
}

export default HeroNext



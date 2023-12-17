import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-400 bg-black body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
        
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-white font-medium title-font mb-2">TheDonutDen</h2>
          <p className="leading-relaxed">Last Call for Holiday Delights! Sign up now for member-exclusive holiday donuts!</p>
          <a className="mt-3 text-indigo-300 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-white font-medium title-font mb-2">About Us</h2>
              <p className="leading-relaxed">Founded by two college friends with a shared passion for baking and entreprenuership</p>
              <a className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-white font-medium title-font mb-2">Location</h2>
              <p className="leading-relaxed">TheDonutDen is in service at NJIT! Come stop by at 250 Central Avenue.</p>
              <a className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Hero
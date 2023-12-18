import React from 'react'

const HeroNext = () => {
    return (
        <section className="text-gray-400 bg-pink-200 body-font border border-black">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-pink-200 sm:py-24 py-16 sm:px-10 px-6 relative">
          <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src="/images/aboutus.jpg"/>
            
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-black font-bold title-font mb-2">About Us</h2>
              <p className="leading-relaxed text-black font-bold">Founded by two college friends with a shared passion for baking and entreprenuership </p>
              
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-pink-200 sm:py-24 py-16 sm:px-10 px-6 relative">
          <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src="/images/location.jpg"/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-black font-bold title-font mb-2">Location</h2>
              <p className="leading-relaxed text-black font-bold">TheDonutDen is in service at NJIT! Come stop by at 250 Central Avenue.</p>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

    )
}

export default HeroNext



import React from 'react'

const Testimonials = () => {
    return (
        <section className="text-gray-600 bg-pink-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/testimonial1.jpg"/>
                <p className="leading-relaxed">"I stumbled upon TheDonutDen while hunting for the perfect donut experience, and oh boy, did I hit the jackpot! The donuts here are so good; they practically levitate off the plate. I'm convinced they sprinkle a touch of magic sugar on each one. The ambiance is so enchanting; I half-expected fairies to pop out from behind the counter. Donut bliss awaits you at TheDonutDen!"</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JULIUS RANDLE</h2>
                <p className="text-gray-500">1 Month TheDonutDen Member</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/testimonial2.jpg"/>
                <p className="leading-relaxed">"Discovered TheDonutDen during my top-secret donut reconnaissance mission, and let me tell you, these donuts are the real deal. The staff is like a donut SWAT team, swiftly and silently crafting the most delectable treats. The 'Covert Creme Brulee' donut is a must-try; it's so good it should be classified. If you're into undercover indulgence, TheDonutDen is your clandestine confectionery haven!"</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">NAOMI FERNANDEZ</h2>
                <p className="text-gray-500">1 Year TheDonutDen Member</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/testimonial3.jpg"/>
                <p className="leading-relaxed">"As a quantum physicist and donut enthusiast, I can confirm that TheDonutDen exists in a flavor dimension of its own. The donuts defy the laws of taste with every bite, and I suspect they've mastered the art of interdimensional glazing. The 'Einstein's Espresso Explosion' donut made me question the fabric of reality. TheDonutDen is the portal to flavor universes unknown!"</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">SUE BIRD</h2>
                <p className="text-gray-500">6 Month TheDonutDen Member</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    )
}

export default Testimonials
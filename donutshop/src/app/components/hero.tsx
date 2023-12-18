import React from 'react'
import NewsletterForm from './NewsLetterForm'
const Hero = () => {
    return (
        <section className="text-gray-600 bg-pink-200 body-font border border-black">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img alt="gallery" className="w-full object-cover h-full object-center block opacity-100 absolute inset-0" src="/images/donut1.jpg"/>
              <div className="text-center relative z-10 w-full">
              <div className="mb-80">
                <h2 className="text-2xl text-pink-600 font-bold title-font">Last Call for Holiday Delights! 
                Sign up now for member-exclusive holiday donuts!</h2>
              </div>
                <p className="leading-relaxed text-pink-600 font-bold">Hurry, they are selling out fast!</p>
                <NewsletterForm />
                
               
              </div>
            </div>
            
          </div>
        </div>
      </section>
    )
}

export default Hero
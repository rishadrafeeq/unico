<<<<<<< HEAD

export default function CTA() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 4xl:py-40">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        
        {/* Logo Badge */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-18 3xl:mb-20 4xl:mb-22">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 3xl:px-9 3xl:py-4.5 4xl:px-10 4xl:py-5 rounded-full">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-11 4xl:h-11 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold">R</span>
            </div>
            <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium">Radison</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl 4xl:max-w-10xl mx-auto">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16 4xl:mb-18 leading-tight">
            Let's talk about<br />
            your next big move
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-300 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-18 3xl:mb-20 4xl:mb-22 leading-relaxed">
            Hop on a call with us to see how our<br />
            services can accelerate your growth.
          </p>
          
          {/* CTA Button */}
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 3xl:mb-9 4xl:mb-10">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 xl:px-10 xl:py-5 2xl:px-11 2xl:py-5.5 3xl:px-12 3xl:py-6 4xl:px-14 4xl:py-7 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
              <span>Schedule a quick call</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 4xl:w-10 4xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
          
          {/* Free Notice */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
            It's Free
          </p>
          
        </div>
      </div>
    </section>
  )
} 
=======
"use client";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-black py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Link href="/">
            <Image
              src="/nav-icon.png"
              alt="Unico Logo"
              width={160}
              height={60}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
          Let’s talk about <br /> your next big move
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg mb-10">
          Hop on a call with us to see how our <br />
          services can accelerate your growth.
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Schedule a quick call</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Free Notice */}
        <p className="text-gray-400 text-sm">Its Free</p>
      </div>
    </section>
  );
}
>>>>>>> c6926bc (Updated testimonial section UI)

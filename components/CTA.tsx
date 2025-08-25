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
        <p className="text-gray-400 text-sm">It’s Free</p>
      </div>
    </section>
  );
}

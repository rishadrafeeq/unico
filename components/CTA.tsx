"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-black py-20 lg:py-28 text-center relative">
      <div className="container-custom max-w-4xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-700/30 blur-3xl rounded-full -z-10"></div>
            <Image
              src="/nav-icon.png"
              alt="Unico Logo"
              width={100}
              height={40}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Let's talk about <br /> your next big move
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg mb-10">
          Hop on a call with us to see how our <br />
          services can accelerate your growth.
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Link href="/#contact">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center space-x-2 shadow-lg">
              <span>Schedule a quick call</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Free Notice */}
        <p className="text-gray-400 text-sm">It's Free</p>
      </div>
    </section>
  );
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Brand & Social */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">U</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">UNICO</span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.6H8V8z"/>
                </svg>
              </a>
              {/* X */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.3 2H22l-9.5 11.1L22 22h-7.2l-5.6-6.6L3.2 22H0l10.3-12L0 2h7.3l5 5.9L18.3 2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.4.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.4-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2.2a6.3 6.3 0 110 12.6 6.3 6.3 0 010-12.6zm6.6-1.6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Sections Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Sections</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="#process" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Process</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Services</Link></li>
                <li><Link href="#benefits" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Benefits</Link></li>
                <li><Link href="#plans" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Plans</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact</Link></li>
              </ul>
            </div>
            
            {/* Pages Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Pages</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Home</Link></li>
                <li><span className="text-gray-400 text-xs sm:text-sm">Coming soon</span></li>
                <li><span className="text-gray-400 text-xs sm:text-sm">404</span></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom border and copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2024 UNICO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

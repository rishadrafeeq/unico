<<<<<<< HEAD
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
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
=======
export default function Footer() {
  return (
    <footer className="bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Logo, tagline, socials */}
          <div className="lg:col-span-2">
            {/* Logo mock (icon + wordmark) */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-md bg-white text-black font-bold flex items-center justify-center">U</div>
              <div>
                <div className="text-white font-semibold text-lg leading-none">UNICO</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-400">INTERNATIONAL PVT LTD</div>
              </div>
            </div>

            <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-6">
              Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-md bg-[#202228] hover:bg-[#2a2d34] flex items-center justify-center text-white/90">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.6H8V8z"/>
                </svg>
              </a>
              {/* X */}
              <a href="#" className="w-10 h-10 rounded-md bg-[#202228] hover:bg-[#2a2d34] flex items-center justify-center text-white/90">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.3 2H22l-9.5 11.1L22 22h-7.2l-5.6-6.6L3.2 22H0l10.3-12L0 2h7.3l5 5.9L18.3 2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-md bg-[#202228] hover:bg-[#2a2d34] flex items-center justify-center text-white/90">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.4.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.4-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-1.9.3-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.1.3-.2.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.3 1.9.2.5.4.9.8 1.2.3.4.7.6 1.2.8.3.1.9.2 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 1.9-.3.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.1-.3.2-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.3-.1-.9-.2-1.9-.3-1.3-.1-1.7-.1-4.8-.1m0 3.5a6.3 6.3 0 110 12.6 6.3 6.3 0 010-12.6zm6.6-1.6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-md bg-[#202228] hover:bg-[#2a2d34] flex items-center justify-center text-white/90">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 2.9h-2.4v7A10 10 0 0022 12z"/>
                </svg>
              </a>
              {/* Dribbble */}
              <a href="#" className="w-10 h-10 rounded-md bg-[#202228] hover:bg-[#2a2d34] flex items-center justify-center text-white/90">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.8 6.7a7.9 7.9 0 01-4.5.2 26 26 0 00-2-3.7 8 8 0 016.5 3.5zM12 4a7.9 7.9 0 014.1 1.2 24 24 0 012.3 3.7 9.4 9.4 0 01-4.8.2 23.5 23.5 0 00-1.9-3.5A8 8 0 0012 4zM8.2 5.3A8 8 0 0112 4c.1 0 .3 0 .4.1a25 25 0 011.9 3.5 13.9 13.9 0 01-6 .6 8.4 8.4 0 01-.1-2.9zM4.6 12a7.9 7.9 0 011.6-4.8 12.2 12.2 0 006.4-.7 25.3 25.3 0 011.7 3.1c-3.7 1.1-6.8 3.6-8.5 6.8A7.9 7.9 0 014.6 12zm7.4 7.9c-1.7 0-3.3-.6-4.6-1.5 1.2-3 3.9-5.5 7.3-6.5.6 1.6 1 3.5 1.1 5.8a8 8 0 01-3.8 2.2zm5.3-3.5c-.2-2-.5-3.6-1-5 1.4.1 2.8-.1 4.1-.6a8 8 0 01-3.1 5.6z"/>
>>>>>>> c6926bc (Updated testimonial section UI)
                </svg>
              </a>
            </div>
          </div>
<<<<<<< HEAD
          
          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Sections Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Sections</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="#process" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#plans" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Pages Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Pages</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 text-xs sm:text-sm">Coming soon</span>
                </li>
                <li>
                  <span className="text-gray-400 text-xs sm:text-sm">404</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom border and copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 UNICO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
=======

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Sections</h3>
              <ul className="space-y-3">
                <li><a href="#process" className="text-gray-300 hover:text-white transition-colors">Process</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#plans" className="text-gray-300 hover:text-white transition-colors">Plans</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><span className="text-gray-300">Coming soon</span></li>
                <li><span className="text-gray-300">404</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
>>>>>>> c6926bc (Updated testimonial section UI)

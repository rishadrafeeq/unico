import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black py-16 sm:py-20 lg:py-28 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Brand & Social */}
          <div className="px-4 sm:px-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Image 
                src="/nav-icon.png" 
                alt="UNICO Logo" 
                width={120} 
                height={40} 
                priority 
                className="h-6 sm:h-8 w-auto" 
              />
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
              Your Trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.6H8V8z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.3 2H22l-9.5 11.1L22 22h-7.2l-5.6-6.6L3.2 22H0l10.3-12L0 2h7.3l5 5.9L18.3 2z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.4.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.4-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2.2a6.3 6.3 0 110 12.6 6.3 6.3 0 010-12.6zm6.6-1.6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                </svg>
              </a>
              {/* Dribbble */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-5.074-.217-7.324.21-.902-2.601-2.271-4.893-4.775-6.02 1.14-.157 2.307-.158 3.492-.064 2.574.422 5.074.217 7.324-.21-.902 2.601-2.271 4.893-4.775 6.02 1.14.157 2.307.158 3.492.064zm-3.68-5.286c.767-.387 1.63-.38 2.475.275-.73.563-1.595.53-2.475-.275zm-10.52-.175c-.387-.563-.4-1.198-.235-1.85.41-.468.94-.69 1.56-.468.387.563.4 1.198.235 1.85-.41.468-.94.69-1.56.468zm10.614 9.015c-.095.158-.24.347-.358.465-1.25 1.494-3.616 3.792-6.604 4.096.781.381 1.656.98 2.411 1.803 1.039-.695 1.99-1.478 2.913-2.221.346.106.713.166 1.08.166 2.28 0 4.169-1.871 4.169-4.169 0-.346-.06-.713-.166-1.08l-.013-.03zM12 20.547c-.105 0-.21-.004-.312-.01 1.626-1.51 3.312-3.087 4.896-4.699.346.106.713.166 1.08.166 2.28 0 4.169-1.871 4.169-4.169 0-.346-.06-.713-.166-1.08l-.013-.03c.666 1.11 1.076 2.36 1.076 3.667 0 3.5-2.857 6.357-6.357 6.357-3.5 0-6.357-2.857-6.357-6.357 0-1.307.41-2.557 1.076-3.667l-.013.03c-.106.367-.166.734-.166 1.08 0 2.28 1.871 4.169 4.169 4.169.367 0 .734-.06 1.08-.166 1.584 1.612 3.27 3.189 4.896 4.699-.102.006-.207.01-.312.01z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            
            {/* Sections Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Sections</h3>
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
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Pages</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Home</Link></li>
                <li><span className="text-gray-400 text-xs sm:text-sm">Coming Soon</span></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">FAQ</Link></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom border and copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center px-4 sm:px-0">
          <p className="text-gray-400 text-xs sm:text-sm">© 2024 UNICO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

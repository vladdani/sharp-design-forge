import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-finto-white border-b border-finto-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-finto-white/95">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-finto-black rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-finto-orange rounded-sm"></div>
                <div className="bg-finto-orange rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl font-semibold text-finto-black">finto.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-finto-gray-dark hover:text-finto-black transition-colors">
              Product
            </a>
            <a href="#" className="text-finto-gray-dark hover:text-finto-black transition-colors">
              Features
            </a>
            <a href="#" className="text-finto-gray-dark hover:text-finto-black transition-colors">
              Resources
            </a>
            <a href="#" className="text-finto-gray-dark hover:text-finto-black transition-colors">
              About
            </a>
            <a href="#" className="text-finto-gray-dark hover:text-finto-black transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-finto-gray-dark text-sm border-none outline-none cursor-pointer">
              <option value="en">EN/DE</option>
            </select>
            <Button className="bg-finto-black text-finto-white hover:bg-finto-gray-800 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-105">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
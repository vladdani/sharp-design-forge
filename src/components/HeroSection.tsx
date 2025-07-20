import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Backed by Y Combinator */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-sm text-finto-gray-medium">
            <span>Backed by</span>
            <div className="bg-finto-orange text-white px-2 py-1 rounded text-xs font-semibold">
              Y
            </div>
            <span className="text-finto-orange font-medium">Combinator</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-finto-black leading-[0.9] mb-8 tracking-tight">
            AI Accounting for
            <br />
            enterprises
          </h1>
          
          <p className="text-xl md:text-2xl text-finto-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            Finto automates up to 75% of an accountant's workload — invoice verification,
            supplier communication, account assignment, approval, and ERP posting
            <br className="hidden md:block" />
            in one streamlined step.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-finto-black text-finto-white hover:bg-finto-gray-800 rounded-xl px-10 py-5 text-lg font-semibold shadow-button transition-all duration-300 hover:shadow-xl hover:scale-105">
            Book a Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";

const ContentSection = () => {
  return (
    <section className="bg-gradient-section py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Dashboard mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600 p-1 rounded-2xl shadow-card">
              <div className="bg-white rounded-xl p-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-finto-black rounded grid grid-cols-2 gap-0.5">
                      <div className="bg-white rounded-sm"></div>
                      <div className="bg-finto-orange rounded-sm"></div>
                      <div className="bg-finto-orange rounded-sm"></div>
                      <div className="bg-white rounded-sm"></div>
                    </div>
                    <span className="font-semibold text-finto-black">Finto</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex space-x-6 mb-8 text-sm">
                  <span className="text-finto-black font-medium">Home</span>
                  <span className="text-finto-gray-medium">Analytics</span>
                  <span className="text-finto-gray-medium">Invoices</span>
                  <span className="text-finto-gray-medium">Documents</span>
                  <span className="text-finto-gray-medium">Tasks</span>
                  <span className="text-finto-gray-medium">Companies</span>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-finto-black">2,874</div>
                    <div className="text-sm text-green-500">+7% vs last month</div>
                    <div className="text-xs text-finto-gray-medium mt-2">Invoices Received</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-finto-black">1,344</div>
                    <div className="text-sm text-green-500">+41% vs last month</div>
                    <div className="text-xs text-finto-gray-medium mt-2">Invoices Booked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-finto-black">25.7</div>
                    <div className="text-sm text-red-500">-5% vs last month</div>
                    <div className="text-xs text-finto-gray-medium mt-2">Days Average Outstanding</div>
                  </div>
                </div>

                {/* Chart area placeholder */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-finto-black">Creditor Automation</div>
                  <div className="space-y-3">
                    {[
                      { name: "Volkswagen AG", count: "11", status: "Processing Group (5)" },
                      { name: "WE Learning GmbH", count: "1", status: "Completed/Running Account Upload" },
                      { name: "Tesla Inc.", count: "2", status: "Processing Group (5)" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-semibold text-xs">{item.name.charAt(0)}</span>
                          </div>
                          <span className="text-finto-black">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-finto-black font-medium">{item.count}</div>
                          <div className="text-xs text-finto-gray-medium">{item.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div className="bg-black rounded-2xl overflow-hidden shadow-card aspect-video">
              <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 flex items-center justify-center">
                {/* Finto logo in video */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded grid grid-cols-2 gap-1 p-1">
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-finto-orange rounded-sm"></div>
                      <div className="bg-finto-orange rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                    </div>
                    <span className="text-white text-2xl font-bold">finto.</span>
                  </div>
                  
                  <h3 className="text-white text-xl font-semibold mb-2">
                    AI Accounting for enterprises
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-6">www.gofinto.com</p>
                  
                  {/* Play button */}
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg text-finto-gray-dark mb-8 leading-relaxed">
            The intelligent solution for invoice processing. Finto develops custom AI agents that work together 
            like a team and serve as exclusive models tailored to your company.
          </p>
          
          <Button className="bg-finto-black text-white hover:bg-finto-gray-dark rounded-lg px-8 py-4 text-lg font-medium shadow-button transition-all duration-200 hover:shadow-lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
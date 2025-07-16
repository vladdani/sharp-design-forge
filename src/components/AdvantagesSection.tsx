import { Button } from "@/components/ui/button";

const AdvantagesSection = () => {
  return (
    <section className="bg-gradient-section py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="text-sm text-finto-gray-medium">Your Accounting</div>
            
            <h2 className="text-5xl font-bold text-finto-black leading-tight">
              Take full advantage
              <br />of
              <br />AI-powered
              <br />automation
            </h2>

            <Button className="bg-finto-black text-white hover:bg-finto-gray-dark rounded-lg px-8 py-4 text-lg font-medium shadow-button">
              Get in Contact
            </Button>

            <div className="space-y-8 pt-8">
              <div>
                <h3 className="text-xl font-bold text-finto-black mb-3">Reduce Costs.</h3>
                <p className="text-finto-gray-dark leading-relaxed">
                  AI automates manual tasks in invoice processing — cutting personnel costs and enabling a scalable, future-proof accounting structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-finto-black mb-3">Increase Efficiency.</h3>
                <p className="text-finto-gray-dark leading-relaxed">
                  Accelerate your invoice processing times. AI enables faster approvals and ensures smooth accounts payable operations — with no loss of early payment discounts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-finto-black mb-3">Improve Accuracy.</h3>
                <p className="text-finto-gray-dark leading-relaxed">
                  AI reduces errors in account assignment, tax validation, and approvals. This lowers audit risks and sustainably improves data quality across your financial processes.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard screenshot */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-card">
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
                    <span className="font-semibold text-finto-black">finto.</span>
                  </div>
                  <div className="text-sm text-blue-600">Dashboard</div>
                </div>

                {/* Search bar */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1 bg-finto-gray-light rounded-lg px-4 py-2 text-sm">
                    🔍 Search                                    ⌘K
                  </div>
                </div>

                {/* Sidebar navigation */}
                <div className="flex space-x-8 mb-8">
                  <div className="space-y-3 text-sm">
                    <div className="text-finto-black font-medium">🏠 Home</div>
                    <div className="text-finto-gray-medium">📊 Dashboard</div>
                    <div className="text-finto-gray-medium flex items-center space-x-2">
                      <span>📥 Inbox</span>
                      <span className="bg-finto-orange text-white text-xs px-2 py-1 rounded">27</span>
                    </div>
                    <div className="text-finto-gray-medium">📄 Documents</div>
                    <div className="text-finto-gray-medium flex items-center space-x-2">
                      <span>✓ Tasks</span>
                      <span className="bg-finto-orange text-white text-xs px-2 py-1 rounded">8</span>
                    </div>
                    <div className="text-finto-gray-medium">🔄 Workflows</div>
                    <div className="text-finto-gray-medium">🏢 Companies</div>
                  </div>

                  <div className="flex-1 space-y-6">
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-finto-gray-medium">Incoming Invoices</div>
                        <div className="text-2xl font-bold text-finto-black">2,874</div>
                        <div className="text-sm text-green-500">+7 21% vs last month</div>
                        <div className="w-full h-8 bg-finto-gray-light rounded mt-2 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-400 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-finto-gray-medium">Touchless Bookings</div>
                        <div className="text-2xl font-bold text-finto-black">1,344</div>
                        <div className="text-sm text-green-500">+14% vs last month</div>
                        <div className="w-full h-8 bg-finto-gray-light rounded mt-2 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-400 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-finto-gray-medium">Realized cash discount</div>
                        <div className="text-2xl font-bold text-finto-black">200k</div>
                        <div className="text-sm text-green-500">+28% vs last month</div>
                        <div className="w-full h-8 bg-finto-gray-light rounded mt-2 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-400 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-finto-gray-medium">Invoice Cycle Time (days)</div>
                        <div className="text-2xl font-bold text-finto-black">2.34</div>
                        <div className="text-sm text-red-500">-48% vs last month</div>
                        <div className="w-full h-8 bg-finto-gray-light rounded mt-2 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-2 bg-red-400 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Creditor anomalies table */}
                    <div>
                      <div className="text-sm font-medium text-finto-black mb-3">Creditor Anomalies</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">M</div>
                            <span>Manufactua AG</span>
                          </div>
                          <div className="text-right">
                            <div className="text-red-500">• Cash Discount</div>
                            <div className="text-finto-gray-medium">Requested Cash Discount missed</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">IT</div>
                            <span>IT Consulting Group SE</span>
                          </div>
                          <div className="text-right">
                            <div className="text-red-500">• Late Fees</div>
                            <div className="text-finto-gray-medium">Requested late payments</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">V</div>
                            <span>VW Leasing GmbH</span>
                          </div>
                          <div className="text-right">
                            <div className="text-blue-500">• Workflow</div>
                            <div className="text-finto-gray-medium">High manual effort</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data connectors */}
                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-finto-black mb-3">🔗 Data Connectors</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">LB</span>
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">Linus Boelim</div>
                      <div className="text-finto-gray-medium">linus@finto.de</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
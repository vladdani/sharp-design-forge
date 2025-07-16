import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Inbox & Communication */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-finto-gray-light rounded-2xl p-8 h-96 flex items-center justify-center">
                {/* Left sidebar with colorful tiles */}
                <div className="absolute left-8 top-8 space-y-2">
                  <div className="grid grid-cols-4 gap-1 w-32">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-black rounded"></div>
                    <div className="w-6 h-6 bg-black rounded"></div>
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <div className="w-6 h-6 bg-black rounded"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <div className="text-xs text-finto-gray-medium space-y-1 mt-4">
                    <div>📧 Mahnungen</div>
                    <div>📄 Lieferscheine</div>
                    <div>📄 Dokumente</div>
                  </div>
                </div>

                {/* Central popup */}
                <div className="bg-finto-black text-white rounded-lg p-6 max-w-xs mx-auto shadow-lg">
                  <h4 className="font-semibold mb-4 text-sm">Inbox auf Autopilot</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Recording of all documents</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Readout & Review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>AI Vendor Communication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Linking of documents</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Sorting & Allocation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-finto-black mb-4">
                Inbox Management.
              </h3>
              <p className="text-finto-gray-dark leading-relaxed mb-6">
                Record all incoming documents, capture any invoice formats, including PDF, scan, XML, or ZUGFeRD, and enable automated communication with vendors.
              </p>
              <Button variant="outline" className="border-finto-gray-medium text-finto-black hover:bg-finto-gray-light">
                Start Now
              </Button>
            </div>
          </div>

          {/* Readout & Review */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-finto-gray-light rounded-2xl p-8 h-96 flex items-center justify-center">
                {/* Document preview */}
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
                  <div className="text-xs text-finto-gray-medium mb-2">VOLKSWAGEN LEASING</div>
                  <div className="border-b pb-4 mb-4">
                    <div className="text-sm font-medium">RE 2025-0054</div>
                    <div className="text-xs text-finto-gray-medium mt-2">
                      Manufactua AG<br />
                      Hauptstraße 1<br />
                      80000 München, Deutschland
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>LICENSE PLATE</span>
                      <span>Contract</span>
                    </div>
                    <div className="flex justify-between">
                      <span>M - AW 634</span>
                      <span>HT21648</span>
                    </div>
                  </div>
                </div>

                {/* Readout accuracy badge */}
                <div className="absolute top-4 right-4 bg-finto-black text-white rounded-lg p-4 max-w-48">
                  <div className="text-sm font-semibold mb-3">99% Readout Accuracy</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Vendor Check</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Bank Account Check</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Compliance Check</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Tax Check</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-finto-black mb-4">
                Invoice Review.
              </h3>
              <p className="text-finto-gray-dark leading-relaxed mb-6">
                Read out invoices with an accuracy rate of over 99% at both document and article levels and run automated compliance, tax and fraud checks.
              </p>
              <Button variant="outline" className="border-finto-gray-medium text-finto-black hover:bg-finto-gray-light">
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;